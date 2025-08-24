import os
import re
import urllib.parse

# Rutas
css_path = "./WUIIcon-0.1.css"
icons_dir = "./Icons/"

# Crear directorio de salida si no existe
os.makedirs(icons_dir, exist_ok=True)

# Limpiar archivos .svg existentes en el directorio destino
for filename in os.listdir(icons_dir):
    if filename.lower().endswith(".svg"):
        os.remove(os.path.join(icons_dir, filename))

# Expresiones regulares
rule_regex = re.compile(r"(\.wui-icon\.[^{\s]+)\s*\{([^}]+)\}", re.MULTILINE)
mask_regex = re.compile(r"--icon-mask\s*:\s*url\(['\"]?(.*?)['\"]?\)\s*;", re.IGNORECASE)
bg_regex   = re.compile(r"background-image\s*:\s*url\(['\"]?(.*?)['\"]?\)\s*;", re.IGNORECASE)

# Tabla de resultados
icon_table = []

# Leer CSS
with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

# Buscar reglas .wui-icon.*
for selector, body in rule_regex.findall(css_content):
    svg_data = None

    # Buscar --icon-mask
    mask_match = mask_regex.search(body)
    if mask_match:
        svg_data = mask_match.group(1)

    # Si no hay --icon-mask, probar con background-image
    if not svg_data:
        bg_match = bg_regex.search(body)
        if bg_match and "none" not in bg_match.group(1).lower():
            svg_data = bg_match.group(1)

    if svg_data:
        # Quitar prefijo .wui-icon.
        style_name = selector.replace(".wui-icon.", "")
        # Decodificar contenido data URI
        if svg_data.startswith("data:image/svg+xml"):
            svg_data = svg_data.split(",", 1)[1]  # separar metadata
            svg_data = urllib.parse.unquote(svg_data)

            # Extraer solo el bloque <svg>...</svg>
            match_svg = re.search(r"(<svg.*?</svg>)", svg_data, re.DOTALL | re.IGNORECASE)
            if match_svg:
                svg_data = match_svg.group(1)
            else:
                continue  # si no hay svg válido, saltar

            # Guardar en tabla
            icon_table.append((style_name, svg_data))

# Imprimir total
print(f"Total de estilos encontrados: {len(icon_table)}")

# Guardar SVGs
for style_name, svg_content in icon_table:
    file_path = os.path.join(icons_dir, f"{style_name}.svg")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"Archivo creado: {file_path}")
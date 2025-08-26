import os
import re
import urllib.parse

# Configuración
css_path = "./WUIIcon-0.1.css"
icons_dir = "./Preview/"
icon_color = "#a2a9b6"  # reemplaza "currentColor" por este color (None para desactivar)
icon_size = 24            # tamaño de íconos en px

# Crear directorio de salida si no existe
os.makedirs(icons_dir, exist_ok=True)

# Limpiar archivos .svg existentes en el directorio destino
for filename in os.listdir(icons_dir):
    if filename.lower().endswith(".svg"):
        os.remove(os.path.join(icons_dir, filename))

# Expresiones regulares
rule_regex = re.compile(r"([^{}]+)\{(.*?)\}", re.DOTALL | re.MULTILINE)
mask_regex = re.compile(r"--icon-mask\s*:\s*url\(['\"]?(.*?)['\"]?\)\s*;", re.IGNORECASE)
bg_regex = re.compile(r"background-image\s*:\s*url\(['\"]?(.*?)['\"]?\)\s*;", re.IGNORECASE)
comment_regex = re.compile(r"/\*.*?\*/", re.DOTALL)  # eliminar comentarios

# Tabla de resultados
icon_table = []

# Leer CSS y eliminar comentarios
with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

css_content = re.sub(comment_regex, "", css_content)

# Buscar reglas CSS
for selectors_block, body in rule_regex.findall(css_content):
    selectors_block = selectors_block.strip()
    body = body.strip()
    selectors = [s.strip() for s in selectors_block.split(",") if s.strip().startswith(".wui-icon.")]
    if not selectors:
        continue

    svg_data = None

    # Buscar --icon-mask
    mask_match = mask_regex.search(body)
    if mask_match and mask_match.group().lower() != "none":
        svg_data = mask_match.group(1)

    # Si no hay --icon-mask, probar con background-image
    if not svg_data:
        bg_match = bg_regex.search(body)
        if bg_match and bg_match.group().lower() != "none":
            svg_data = bg_match.group(1)

    if svg_data and svg_data.startswith("data:image/svg+xml"):
        svg_data = svg_data.split(",", 1)[1]  # separar metadata

        # Decodificar solo si parece estar URL-encoded
        if "%" in svg_data or "+" in svg_data:
            svg_data = urllib.parse.unquote(svg_data)

        # Extraer solo el bloque <svg>...</svg>
        match_svg = re.search(r"(<svg.*?</svg>)", svg_data, re.DOTALL | re.IGNORECASE)
        if not match_svg:
            continue
        svg_data = match_svg.group(0)

        # Reemplazo de currentColor
        if icon_color:
            svg_data = svg_data.replace("currentColor", icon_color)

        # Insertar width y height después de xmlns y antes de viewBox
        svg_data = re.sub(
            r'(<svg[^>]*\sxmlns=["\'][^"\']+["\'])',
            rf'\1 width="{icon_size}" height="{icon_size}"',
            svg_data,
            count=1
        )

        # Guardar en tabla con todos los nombres de estilo
        for selector in selectors:
            style_name = selector.replace(".wui-icon.", "")
            icon_table.append((style_name, svg_data))
            print(f"Estilo encontrado {style_name}")

# Ordenar tabla por nombre de estilo
icon_table.sort(key=lambda x: x[0].lower())

# Imprimir total
total = len(icon_table)
print(f"Total de estilos encontrados: {total}")

# Guardar SVGs con contador
for idx, (style_name, svg_content) in enumerate(icon_table, start=1):
    file_path = os.path.join(icons_dir, f"{style_name}.svg")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"[{idx}/{total}] Archivo creado: {file_path}")
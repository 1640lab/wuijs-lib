from bs4 import BeautifulSoup

def html_icons_to_markdown(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")

    # Extraer filas
    rows = []
    for tr in soup.find_all("tr"):
        cells = []
        tds = tr.find_all("td")

        for i in range(0, len(tds), 2):
            # --- Icono (columna impar) ---
            style_td = tds[i+1] if i+1 < len(tds) else None
            if style_td:
                # tomar primer estilo (sin el punto inicial)
                styles = [s.strip() for s in style_td.decode_contents().split("<br>")]
                base_name = styles[0].lstrip(".")
                icon_md = f"![](./src/WUI/Icon/Preview/{base_name}.svg)"
            else:
                icon_md = ""

            # --- Estilos (columna par) ---
            style_md = style_td.decode_contents() if style_td else ""

            # reemplazar <br> por markdown linebreak
            style_md = style_md.replace("<br>", "<br>")

            cells.append(icon_md)
            cells.append(style_md)
        rows.append(cells)

    # calcular número de columnas
    num_cols = max(len(r) for r in rows)

    # preparar encabezados
    headers = []
    aligns = []
    for i in range(0, num_cols, 2):
        headers.extend(["Icon", "Style"])
        aligns.extend([":--:", ":----"])

    # normalizar ancho de columnas
    table = [headers] + [aligns]
    for r in rows:
        # rellenar filas incompletas
        if len(r) < num_cols:
            r.extend([""] * (num_cols - len(r)))
        table.append(r)

    # calcular ancho máximo de cada columna
    col_widths = [max(len(str(row[i])) for row in table) for i in range(num_cols)]

    # formatear tabla markdown
    md_lines = []
    for ridx, row in enumerate(table):
        line_parts = []
        for cidx, cell in enumerate(row):
            cell_str = str(cell)
            pad = col_widths[cidx] - len(cell_str)
            # alineación izquierda + margen 1 espacio cada lado
            line_parts.append(" " + cell_str + " " * (pad + 1))
        md_lines.append("|" + "|".join(line_parts) + "|")

    return "\n".join(md_lines)


# ========================
# EJEMPLO DE USO
# ========================
if __name__ == "__main__":
    with open("icons.html", "r", encoding="utf-8") as f:
        html = f.read()
    md = html_icons_to_markdown(html)
    print(md)
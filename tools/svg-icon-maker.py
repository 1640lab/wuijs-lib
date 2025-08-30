import os
import re
import urllib.parse
import argparse

# Default arguments
css_path = "../src/WUI/Icon/WUIIcon-0.1.css"
out_dir = "../imgs/Icons/"
icon_color = "#a2a9b6"
icon_size = 24

# Get arguments
parser = argparse.ArgumentParser(
    description="Extract SVG icons from WUIIcon CSS file.",
    formatter_class=argparse.ArgumentDefaultsHelpFormatter
)
parser.add_argument("--css", type=str, help="Path to the CSS file.", default=css_path)
parser.add_argument("--out", type=str, help="Output directory for SVG icons.", default=out_dir)
parser.add_argument("--color", type=str, help="Color to replace 'currentColor' in SVGs.", default=icon_color)
parser.add_argument("--size", type=int, help="Size (width and height) to set in SVGs.", default=icon_size)
args = parser.parse_args()

# Create output directory if it doesn't exist
os.makedirs(args.out, exist_ok=True)

# Clean up existing .svg files in the destination directory
for filename in os.listdir(args.out):
    if filename.lower().endswith(".svg"):
        os.remove(os.path.join(args.out, filename))

# Regular expressions
rule_regex = re.compile(r"([^{}]+)\{(.*?)\}", re.DOTALL | re.MULTILINE)
mask_regex = re.compile(r"--icon-mask\s*:\s*url\(['\"]?(.*?)['\"]?\)\s*;", re.IGNORECASE)
bg_regex = re.compile(r"background-image\s*:\s*url\(['\"]?(.*?)['\"]?\)\s*;", re.IGNORECASE)
comment_regex = re.compile(r"/\*.*?\*/", re.DOTALL)  # delete comments

# Results table
icon_table = []

# Read CSS and remove comments
with open(args.css, "r", encoding="utf-8") as f:
    css_content = f.read()

css_content = re.sub(comment_regex, "", css_content)

# Search for CSS rules
for selectors_block, body in rule_regex.findall(css_content):
    selectors_block = selectors_block.strip()
    body = body.strip()
    selectors = [s.strip() for s in selectors_block.split(",") if s.strip().startswith(".wui-icon.")]
    if not selectors:
        continue

    svg_data = None

    # Search --icon-mask
    mask_match = mask_regex.search(body)
    if mask_match and mask_match.group().lower() != "none":
        svg_data = mask_match.group(1)

    # If there is no --icon-mask, try background-image
    if not svg_data:
        bg_match = bg_regex.search(body)
        if bg_match and bg_match.group().lower() != "none":
            svg_data = bg_match.group(1)

    if svg_data and svg_data.startswith("data:image/svg+xml"):
        svg_data = svg_data.split(",", 1)[1]  # separate metadata

        # Decode only if it appears to be URL-encoded
        if "%" in svg_data or "+" in svg_data:
            svg_data = urllib.parse.unquote(svg_data)

        # Extract only the <svg>...</svg> block
        match_svg = re.search(r"(<svg.*?</svg>)", svg_data, re.DOTALL | re.IGNORECASE)
        if not match_svg:
            continue
        svg_data = match_svg.group(0)

        # Replacing currentColor
        if args.color:
            svg_data = svg_data.replace("currentColor", args.color)

        # Insert width and height after xmlns and before viewBox
        svg_data = re.sub(
            r'(<svg[^>]*\sxmlns=["\'][^"\']+["\'])',
            rf'\1 width="{args.size}" height="{args.size}"',
            svg_data,
            count=1
        )

        # Save to table with all style names
        for selector in selectors:
            style_name = selector.replace(".wui-icon.", "")
            icon_table.append((style_name, svg_data))
            print(f"Estilo encontrado {style_name}")

# Sort table by style name
icon_table.sort(key=lambda x: x[0].lower())

# Print total
total = len(icon_table)
print(f"Total de estilos encontrados: {total}")

# Save SVGs with counter
for idx, (style_name, svg_content) in enumerate(icon_table, start=1):
    file_path = os.path.join(args.out, f"{style_name}.svg")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print(f"[{idx}/{total}] Archivo creado: {file_path}")
# -*- coding: utf-8 -*-
"""
mockup_notebook.py — monta capturas de escritorio dentro de un notebook.

Mismo lenguaje que el telefono de las apps: fondo (244,245,249), marco
oscuro (13,13,13), sombra suave, lienzo de 1600x1200. La captura se
recorta desde arriba a 16:10, para que siempre se vea la cabecera.

Uso (REESCRIBE cada archivo en su lugar; montar dos veces pone un
notebook dentro de otro, asi que se corre sobre la captura cruda):

  python tools/mockup_notebook.py assets/img/ia/<proyecto>/*.png

Se usa para las plataformas web y Maker Lab. Las apps de celular van en
el telefono. Despues se construye y commitea como siempre: el ?v= de
las fotos obliga al navegador a bajar la version nueva.
"""
import sys, os
from PIL import Image, ImageDraw, ImageFilter

FONDO = (244, 245, 249)
MARCO = (13, 13, 13)
W, H = 1600, 1200

# pantalla
IN_W, IN_H = 1160, 725            # area visible, 16:10
BISEL, BISEL_ABAJO = 20, 26
OUT_W, OUT_H = IN_W + 2 * BISEL, IN_H + BISEL + BISEL_ABAJO
# base
BASE_W, BASE_H = 1380, 24

def redondeado(size, radio, color):
    capa = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(capa).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radio, fill=color)
    return capa

def montar(origen, destino):
    cap = Image.open(origen).convert("RGB")
    # recorte superior a 16:10: se conserva la cabecera de la pagina
    alto = round(cap.width * IN_H / IN_W)
    if alto <= cap.height:
        cap = cap.crop((0, 0, cap.width, alto))
    else:
        ancho = round(cap.height * IN_W / IN_H)
        x = (cap.width - ancho) // 2
        cap = cap.crop((x, 0, x + ancho, cap.height))
    cap = cap.resize((IN_W, IN_H), Image.LANCZOS)

    lienzo = Image.new("RGBA", (W, H), FONDO + (255,))
    total_h = OUT_H + BASE_H
    x0 = (W - OUT_W) // 2
    y0 = (H - total_h) // 2 - 6
    bx0 = (W - BASE_W) // 2
    by0 = y0 + OUT_H - 2

    # sombra suave bajo todo el equipo
    sombra = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(sombra)
    d.rounded_rectangle([x0 + 10, y0 + 26, x0 + OUT_W - 10, y0 + OUT_H + 10], 30, fill=(20, 24, 40, 46))
    d.rounded_rectangle([bx0 + 30, by0 + 14, bx0 + BASE_W - 30, by0 + BASE_H + 22], 20, fill=(20, 24, 40, 40))
    sombra = sombra.filter(ImageFilter.GaussianBlur(28))
    lienzo.alpha_composite(sombra)

    # marco de la pantalla y la captura con esquinas levemente redondeadas
    lienzo.alpha_composite(redondeado((OUT_W, OUT_H), 30, MARCO + (255,)), (x0, y0))
    mascara = Image.new("L", (IN_W, IN_H), 0)
    ImageDraw.Draw(mascara).rounded_rectangle([0, 0, IN_W - 1, IN_H - 1], 8, fill=255)
    lienzo.paste(cap, (x0 + BISEL, y0 + BISEL), mascara)
    # camara
    d = ImageDraw.Draw(lienzo)
    cx, cy = W // 2, y0 + BISEL // 2
    d.ellipse([cx - 3, cy - 3, cx + 3, cy + 3], fill=(48, 48, 52, 255))

    # base: barra clara con esquinas redondeadas abajo y la muesca al centro
    base = Image.new("RGBA", (BASE_W, BASE_H), (0, 0, 0, 0))
    bd = ImageDraw.Draw(base)
    bd.rounded_rectangle([0, 0, BASE_W - 1, BASE_H - 1], 12, fill=(214, 216, 222, 255))
    bd.rectangle([0, 0, BASE_W - 1, 8], fill=(226, 228, 233, 255))
    bd.line([(0, BASE_H - 2), (BASE_W, BASE_H - 2)], fill=(188, 190, 198, 255), width=2)
    bd.rounded_rectangle([BASE_W // 2 - 90, 0, BASE_W // 2 + 90, 8], 4, fill=(196, 198, 205, 255))
    lienzo.alpha_composite(base, (bx0, by0))

    lienzo.convert("RGB").save(destino, optimize=True)

if __name__ == "__main__":
    for origen in sys.argv[1:]:
        destino = origen
        montar(origen, destino)
        print("ok", origen)

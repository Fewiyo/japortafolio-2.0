# -*- coding: utf-8 -*-
"""
Pone una version en los enlaces a CSS y JS de cada HTML.

El problema que resuelve: todo el contenido del sitio vive en
js/data.js y css/style.css. El navegador los guarda en cache y los
reusa sin volver a preguntar, asi que despues de publicar se sigue
viendo la version vieja hasta que el usuario hace Ctrl+F5.

Con esto, cada archivo se pide como "js/data.js?v=a1b2c3d4", donde el
numero sale del contenido del propio archivo. Si el archivo cambia,
cambia la direccion, y el navegador se ve obligado a bajarlo de nuevo.
Si no cambia, la direccion es la misma y sigue usando la cache, que es
justo lo que uno quiere.

Se corre solo antes de cada commit (ver .githooks/pre-commit), pero
tambien se puede correr a mano:

    python tools/version.py
"""
import hashlib
import io
import os
import re
import sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RECURSOS = ["css/style.css", "js/data.js", "js/main.js"]


def version(ruta):
    """Ocho caracteres del hash del contenido."""
    with open(os.path.join(RAIZ, ruta), "rb") as f:
        return hashlib.sha256(f.read()).hexdigest()[:8]


def main():
    versiones = {}
    for r in RECURSOS:
        if not os.path.exists(os.path.join(RAIZ, r)):
            print("  falta %s, se omite" % r)
            continue
        versiones[r] = version(r)

    cambiados = []
    for nombre in sorted(os.listdir(RAIZ)):
        if not nombre.endswith(".html"):
            continue
        ruta = os.path.join(RAIZ, nombre)
        antes = io.open(ruta, encoding="utf-8").read()
        s = antes
        for recurso, v in versiones.items():
            # calza con o sin ?v= previo, en href= y en src=
            s = re.sub(
                r'((?:href|src)=")' + re.escape(recurso) + r'(?:\?v=[0-9a-f]+)?(")',
                lambda m: m.group(1) + recurso + "?v=" + v + m.group(2),
                s,
            )
        if s != antes:
            io.open(ruta, "w", encoding="utf-8").write(s)
            cambiados.append(nombre)

    for r, v in sorted(versiones.items()):
        print("  %-16s v=%s" % (r, v))
    print("HTML actualizados: %s" % (", ".join(cambiados) if cambiados else "ninguno, ya estaban al dia"))
    return cambiados


if __name__ == "__main__":
    main()
    sys.exit(0)

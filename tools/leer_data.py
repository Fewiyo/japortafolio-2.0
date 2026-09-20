# -*- coding: utf-8 -*-
"""
Lector del objeto literal de js/data.js.

No es JSON (claves sin comillas, comentarios), asi que hace falta un
parser propio. Es pequeno porque el archivo solo usa strings, arrays,
objetos y booleanos.
"""
import io, re


class Lector(object):
    def __init__(self, s):
        self.s = s
        self.i = 0

    def error(self, msg):
        ctx = self.s[max(0, self.i - 60):self.i + 60]
        raise ValueError("%s en %d:\n...%s..." % (msg, self.i, ctx))

    def saltar(self):
        """Espacios y comentarios."""
        while self.i < len(self.s):
            c = self.s[self.i]
            if c in " \t\r\n,":
                self.i += 1
            elif self.s.startswith("/*", self.i):
                fin = self.s.index("*/", self.i)
                self.i = fin + 2
            elif self.s.startswith("//", self.i):
                fin = self.s.find("\n", self.i)
                self.i = len(self.s) if fin < 0 else fin
            else:
                return

    def valor(self):
        self.saltar()
        c = self.s[self.i]
        if c == "{":
            return self.objeto()
        if c == "[":
            return self.arreglo()
        if c in "\"'":
            return self.cadena()
        if self.s.startswith("true", self.i):
            self.i += 4; return True
        if self.s.startswith("false", self.i):
            self.i += 5; return False
        if self.s.startswith("null", self.i):
            self.i += 4; return None
        m = re.match(r"-?\d+(\.\d+)?", self.s[self.i:])
        if m:
            self.i += m.end()
            return float(m.group()) if "." in m.group() else int(m.group())
        self.error("valor inesperado")

    def cadena(self):
        comilla = self.s[self.i]
        self.i += 1
        out = []
        while True:
            c = self.s[self.i]
            if c == "\\":
                sig = self.s[self.i + 1]
                out.append({"n": "\n", "t": "\t", "r": "\r"}.get(sig, sig))
                self.i += 2
            elif c == comilla:
                self.i += 1
                return "".join(out)
            else:
                out.append(c)
                self.i += 1

    def clave(self):
        self.saltar()
        if self.s[self.i] in "\"'":
            return self.cadena()
        m = re.match(r"[A-Za-z_$][\w$]*", self.s[self.i:])
        if not m:
            self.error("clave inesperada")
        self.i += m.end()
        return m.group()

    def objeto(self):
        self.i += 1              # {
        d = {}
        while True:
            self.saltar()
            if self.s[self.i] == "}":
                self.i += 1
                return d
            k = self.clave()
            self.saltar()
            if self.s[self.i] != ":":
                self.error("falta ':'")
            self.i += 1
            d[k] = self.valor()

    def arreglo(self):
        self.i += 1              # [
        out = []
        while True:
            self.saltar()
            if self.s[self.i] == "]":
                self.i += 1
                return out
            out.append(self.valor())


def cargar(ruta):
    s = io.open(ruta, encoding="utf-8").read()
    ini = s.index("{", s.index("const SITE"))
    return Lector(s[ini:]).objeto()


if __name__ == "__main__":
    import sys
    d = cargar(sys.argv[1])
    print("claves:", ", ".join(sorted(d.keys())))
    print("cursos:", len(d["cursos"]))
    for c in d["cursos"]:
        print("  %-28s %2d sesiones  %d fotos  %d destacados" %
              (c["nombre"], len(c.get("temario", [])), len(c.get("galeria", [])), len(c.get("destacados", []))))

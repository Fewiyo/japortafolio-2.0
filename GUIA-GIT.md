# Guía de Git para Windows

Usa **PowerShell** para los comandos (tecla Windows, escribe `PowerShell`).

## Flujo de trabajo

```
Fotos + info  →  Claude edita en la nube  →  commit + push a su rama
                                                     │
                         tú la descargas y la ves en tu PC (localhost)
                                                     │
                         te gusta  →  pull request  →  merge a main  →  GitHub publica
```

- La rama es solo código guardado en GitHub; no "corre" en ningún lado.
- El contenido vive en `js/data.js`; `tools/construir.py` genera el HTML.
- El hook `.githooks/pre-commit` ejecuta `construir.py` antes de cada commit.
- Probablemente el sitio se publica con GitHub Pages (revisa Settings → Pages) y
  `japortafolio.com` (archivo `CNAME`) apunta a GitHub vía DNS. Hostinger lo más
  probable es que solo administre el dominio y el DNS, sin alojar el sitio.

## 1. Instalar (una sola vez)

1. **Git:** https://git-scm.com/download/win (opciones por defecto).
2. **Python:** https://www.python.org/downloads/ — marca **"Add python.exe to PATH"**.
3. *(Opcional)* **VS Code:** https://code.visualstudio.com

Comprueba en una PowerShell nueva:

```powershell
git --version
python --version
```

## 2. Presentarte ante Git (una sola vez)

```powershell
git config --global user.name "Vicente Cáceres Farías"
git config --global user.email "vicentecfarias@gmail.com"
```

## 3. Descargar el proyecto (una sola vez)

```powershell
cd $HOME\Documents
git clone https://github.com/Fewiyo/japortafolio-2.0
cd japortafolio-2.0
git config core.hooksPath .githooks
```

## 4. Ver los cambios de una rama

```powershell
git fetch origin
git checkout NOMBRE-DE-LA-RAMA
python -m http.server 5173
```

Abre Chrome en http://localhost:5173. Para detener el servidor: `Ctrl + C`.
Si no ves cambios, refresca con `Ctrl + F5`.

## 5. Hacer tú el push

```powershell
git checkout main
git pull origin main
git checkout -b mi-rama

# edita algo, luego:
git status
git add js/data.js
git commit -m "Descripción del cambio"
git push -u origin mi-rama
```

| Comando | Qué hace |
|---|---|
| `git status` | Muestra qué archivos cambiaron |
| `git add` | Elige qué entra en el commit |
| `git commit` | Guarda un punto del historial en tu PC |
| `git push` | Envía los commits a GitHub |

## 6. Publicar

1. En GitHub pulsa **Compare & pull request**.
2. Revisa los cambios y pulsa **Create pull request**.
3. Pulsa **Merge pull request** para mezclar con `main` y publicar.

## Problemas comunes

- **"python no se reconoce":** reinstala marcando *Add to PATH*, o prueba `py`.
- **Puerto ocupado:** usa otro, p. ej. `python -m http.server 8080`.
- **El push pide contraseña:** inicia sesión por el navegador o usa un token personal.
- **El hook no encontró Python:** corre `python tools/construir.py` y vuelve a commitear.

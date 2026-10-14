# Kaelence — Website

Sitio oficial de Kaelence. Estático, construido con [Astro](https://astro.build) 7.

Fuente de verdad de marca y posicionamiento: `../company/KAELENCE_BRAND_AND_COMPANY.md`.
Assets de referencia: `../media/`. Prototipo original: `../kaelence.html`.

## Comandos

| Comando           | Acción                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Instala dependencias (versiones fijadas exactas)  |
| `npm run dev`     | Servidor local en `http://localhost:4321`         |
| `npm run build`   | Genera el sitio estático en `dist/`               |
| `npm run preview` | Sirve `dist/` localmente                          |
| `npm run check`   | Verificación de tipos y plantillas Astro          |
| `npm run og`      | Regenera `public/og.png` y `apple-touch-icon.png` |

## Estructura

```
src/
├── data/site.ts        ← TODO el copy del sitio (editar textos aquí)
├── styles/global.css   ← tokens de marca (paleta §13, tipografía §14)
├── layouts/Base.astro  ← <head>: SEO, Open Graph, JSON-LD, fuentes
├── components/
│   ├── Mark.astro      ← K geométrica (logo 04), SVG
│   ├── Wordmark.astro  ← KΛELENCE. (logo 01), SVG
│   ├── Logo.astro      ← lockup horizontal
│   └── …               ← una sección por componente
└── pages/              ← index.astro, 404.astro
public/                 ← favicon.svg, og.png, robots.txt
scripts/og.mjs          ← genera imágenes sociales desde la geometría vectorial
```

Orden de la home (problema → capacidad → solución → tecnología):
Hero → Problems → Capabilities (SYS/AI/TAL) → Pods → Projects → Approach → Clients → Differentiation → Contact.

## Contacto

Único canal por ahora: `kaelence01@gmail.com` (`src/data/site.ts` → `email`).

## Pendientes antes de publicar

- Dominio: `kaelence.com` (principal) ← `www.kaelence.com` redirige 308. DNS en Namecheap.
- Proyecto PRJ · 01: al desplegarlo, en `src/data/site.ts` → `projects` cambiar `status` a `'live'`,
  completar `name`, `summary`, `capabilities`, `stack`, `url` y (si el repo de GitLab es público) `repo`.
- Hosting: Vercel, despliegue automático en cada push a `main`.

# vite-electron-template

This is a minimal template for Vite + Electron.

## Get started

```bash
# Installation
npm i

# Development
npm run watch

# Production build
npm run build
```

## Changing Vite template

You can change Vite template by replacing `page` dir.

```bash
# delete page dir
rm -r page

# generate Vite template to page dir
npm create Vite@latest page

# install
npm i
```

Basically you can use any template for `page` dir but there is only two requirements.

1. The package name _MUST_ be `'page'`.
2. The html file `index.html` _MUST_ be positioned at the root of the output directory.(Usually it is the default option)

# vite-electron-template

This is a minimal template for Vite + Electron.

## Get started

```bash
# Installation
npm i

# Development
npm run watch
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

# Draft Release

Pushing commit to `main` branch invoke github actions to automatically create draft release.

You can set additional environment variables e.g. `CSC_LINK` to code sigining for mac build in `.github/workflows/draft-release.yml`.

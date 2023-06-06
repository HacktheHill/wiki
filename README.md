# HTH Wiki

## Installation
- Runs on Node v16

```sh
npm install --legacy-peer-deps
```

## config
- Wiki.js does not support using .env variables for config
- Had to customize the config.yml parsing and adding the dotenv package in `server/core/config.js`

## Pathes
1. Remove `exports` in `node_modules/extract-files/package.json`
```sh
✅ export NODE_OPTIONS=--openssl-legacy-provider
```

# HTH Wiki

## Installation
- Runs on Node v16

```sh
npm install --legacy-peer-deps
```

## config
- Wiki.js does not support using .env variables for config
- Had to customize the config.yml parsing and adding the dotenv package in `server/core/config.js`

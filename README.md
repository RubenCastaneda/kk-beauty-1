# KK Beauty Lab

## Setup
git clone git@github.com:RubenCastaneda/kk-beauty.git
cd kk-beauty
npm install

## Dev
npm start

## Build
npm run build

## Deploy on Railway
- Connect this GitHub repo in Railway
- Railway auto-runs `npm install && npm run build && npm run serve`

## Routing
This project uses `HashRouter` from React Router so navigation works even when
hosted on static file servers. Links like **About Us** and **Newsletter** use
hash-based URLs (e.g. `#/about-us`), ensuring the pages load correctly without
additional server configuration.

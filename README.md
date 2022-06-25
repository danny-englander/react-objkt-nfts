# React Object.com NFTs

![Screen Shot of the app](cover.png 'Screen Shot of the app')

## Demo site

[https://objkt-nfts.netlify.app/](https://objkt-nfts.netlify.app/)

## Overview

This project pulls in my artwork that I have listed on [Objkt.com](https://objkt.com/collection/KT1UjcUAQWjNy4mYqUKwmBgEbu93aoos5qq5), an NFT marketplace built upon the Tezos cryptocurrency blockchain. This React app uses Objkt's API via graphQL to pull in data.

## Getting started

You can read some general info about [getting started with React](React-README.md).

## Install this project

This app is now on React 18. You should either be running Node version 16 or Node Version Manager. In the project directory, you can run:

```bash
nvm use
npm install
```

Thereafter, you can run `npm run start` to open the webpage. If you want to change any CSS, you can run `gulp` in a separate terminal window.

## Methodology and API

This project pulls in my own Objkt.com NFT collections as a sort of brochure site; that is to say, this does not have anything to do with NFT minting which is beyond the current scope of the project.

I wrote a custom query in `ObjktQuery.jsx` that pulls in graphQL data from the Objkt.com API endpoint here: [https://data.objkt.com/explore/](https://data.objkt.com/explore/).

The key part of the query is:

```sql
query objkts {
  fa(where: {contract:
  {_in:
  ["KT1W7eBKSVZB3xhwXCX8PpMivbK19wgh21QS",
   "KT1UjcUAQWjNy4mYqUKwmBgEbu93aoos5qq5"]
   }},
   order_by: {name: asc}) {...
```

This points to the two smart contract ids for my collections. You can copy and paste the entire query into Objkt's graphQL explorer and adjust to your own liking within the endpoint linked to above.

To view Objkt's API documentation, go to [https://data.objkt.com/docs/](https://data.objkt.com/docs/)

## CSS / SCSS

This project implements the latest Sass module methods using `@use` and `@forward` dropping usage of the now legacy `@import` method.

The React components use [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/).

## Performance

To measure performance on this site, ensure you are using the production build with an incognito browser. Here is the Lighthouse score below.

![Lighthouse score](performance.png 'Lighthouse score')

## TODO

- Theme header
- Theme footer
- <del>Use local images</del>
- <del>Implement responsive images</del>
- <del>Implement webP image formats</del>
- <del>Demo site on Netlify</del>
- Upgrade to Node v18

## Roadmap

- TBD

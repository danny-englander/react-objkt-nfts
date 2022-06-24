# React Object.com NFTs

This project pulls in Objkt.com NFTs using the Objkt.com API via graphQL

## Getting started

You can read some general info about [getting started with React](React-README.md).

## Install this project

You should either be running Node version 16 or Node Version Manager. In the project directory, you can run:

```bash
nvm use
npm install
```

Thereafter, you can run `npm run start` to open the webpage. If you want to change any CSS, you can run `gulp` in a separate terminal window.

## Methodology

This project pulls in one or more Objkt.com NFT collections as a sort of brochure site; that is to say, this does not have anything to do with NFT minting which is beyond the current scope of the project.

There is a custom query in `ObjktQuery.jsx` that pulls in a custom graphQL query from the Objkt.com API endpoint here: [https://data.objkt.com/explore/](https://data.objkt.com/explore/).

To view Objkt's API documentation, go to [https://data.objkt.com/docs/](https://data.objkt.com/docs/)

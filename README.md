# React Object.com NFTs

This project pulls in my artwork that is listed on Objkt.com, an NFT marketplace using their API via graphQL.

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

This project pulls in my own Objkt.com NFT collections as a sort of brochure site; that is to say, this does not have anything to do with NFT minting which is beyond the current scope of the project.

I wrote a custom query in `ObjktQuery.jsx` that pulls in graphQL data from the Objkt.com API endpoint here: [https://data.objkt.com/explore/](https://data.objkt.com/explore/).

The key part of the query is:

```sql
query objkts {
  fa(where: {contract: {_in: ["KT1W7eBKSVZB3xhwXCX8PpMivbK19wgh21QS", "KT1UjcUAQWjNy4mYqUKwmBgEbu93aoos5qq5"]}}, order_by: {name: asc}) {...
```

This points to the two contract ids for my collections. You can copy and paste the entire query into Objkt's graphQL explorer and adjust to your own liking within the endpoint linked to above.

To view Objkt's API documentation, go to [https://data.objkt.com/docs/](https://data.objkt.com/docs/)

## TODO

- Theme header
- Theme footer
- Use local images
- Implement responsive images
- Implement webP image formats

## Roadmap

- TBD

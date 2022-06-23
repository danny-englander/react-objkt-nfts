export const GRAPHQL_API = 'https://data.objkt.com/v2/graphql'

export const GET_OBJKT_QUERY = `
query objkts {
  fa(where: {contract: {_in: ["KT1UjcUAQWjNy4mYqUKwmBgEbu93aoos5qq5", "KT1W7eBKSVZB3xhwXCX8PpMivbK19wgh21QS"]}}) {
    collection_id
    collection_type
    description
    contract
    tokens(order_by: {token_id: asc}, where: {supply: {_gte: "1"}}) {
      display_uri
      description
      token_id
      name
      mime
      thumbnail_uri
      artifact_uri
      ophash
      symbol
      supply
      tags {
        id
        tag_id
        tag {
          name
          token_count
        }
      }
      fa {
        contract
        collection_id
        creator {
          description
          address
        }
      }
    }
  }
  listing(where: {fa_contract: {_in: ["KT1UjcUAQWjNy4mYqUKwmBgEbu93aoos5qq5", "KT1W7eBKSVZB3xhwXCX8PpMivbK19wgh21QS"]}}) {
    fa_contract
    id
    price
    token {
      display_uri
      token_id
      ophash
    }
  }
}

`

import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import * as Constants from './ObjktQuery'
import LazyLoad from 'react-lazyload'
import LazyPlaceholder from './LazyPlaceholder'
// CSS modules.
import card from '../styles/css/components/Card.module.css'
import container from '../styles/css/components/Container.module.css'

const ObjktRender = () => {
  const [data, setData] = useState({ objkts: [] })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await axios.post(Constants.GRAPHQL_API, {
          query: Constants.GET_OBJKT_QUERY,
        })

        const result = queryResult.data.data
        console.log(result)
        // console.log(result.fa[0].contract)
        setData({ objkts: result.fa[0].tokens })
      } catch {
        throw Error('API fetch failed')
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className={container.Layout}>
        <ul className={card.Items}>
          {data.objkts.map((item, contract_id) => (
            <li
              key={item.token_id}
              id={`item-${item.token_id}`}
              className={`${card.Item} ${ item.tags.map(tag_item => `tag-${tag_item.tag.name}`).toString().replaceAll(' ', '-').replaceAll(',', ' ')}`}
            >

              <div className={card.ItemInner}>
                <a
                  href={`https://objkt.com/asset/${item.fa.contract}/${item.token_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>{item.name}</h2>
                </a>

                <LazyLoad
                  height={280}
                  offset={100}
                  placeholder={<LazyPlaceholder />}
                >
                  <img
                    className={card.Img}
                    src={`https://ipfs.io/ipfs/${item.thumbnail_uri.slice(7)}`}
                    alt={item.name}
                    width="350"
                    height="280"
                  />
                </LazyLoad>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ObjktRender

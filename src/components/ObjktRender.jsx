import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Constants from './ObjktQuery'
import CardElement from './CardElement'
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
        <ul className={card.Elements}>
          {data.objkts.map((item, token_id) => (
            <CardElement card={card} item={item} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ObjktRender

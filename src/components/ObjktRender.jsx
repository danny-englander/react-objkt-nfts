import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as Constants from './ObjktQuery'
import CardElement from './CardElement'
// React accessible tabs - https://github.com/reactjs/react-tabs.
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// CSS modules.
import card from '../styles/css/components/Card.module.css'
import container from '../styles/css/components/Container.module.css'

const ObjktRender = () => {
  // Define main data arrays, add more as needed.
  const [data0, setData0] = useState({ objkts: [] })
  const [data1, setData1] = useState({ objkts: [] })
  // Define the title from the array key, add more as needed.
  const [mainTitle0, setMainTitle0] = useState('')
  const [desc0, setDesc0] = useState('')

  const [mainTitle1, setMainTitle1] = useState('')
  const [desc1, setDesc1] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryResult = await axios.post(Constants.GRAPHQL_API, {
          query: Constants.GET_OBJKT_QUERY,
        })
        // Define the data result.
        const result = queryResult.data.data
        console.log(result)
        // Set the main data array.
        setData0({ objkts: result.fa[0].tokens })

        setData1({ objkts: result.fa[1].tokens })
        // Set the title for use in HTML.
        setMainTitle0(result.fa[0].name)
        setDesc0(result.fa[0].description)

        setMainTitle1(result.fa[1].name)
        setDesc1(result.fa[1].description)
      } catch {
        throw Error('API fetch failed')
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className={container.Layout}>
        <Tabs>
          <TabList>
            <Tab>{mainTitle0}</Tab>
            <Tab>{mainTitle1}</Tab>
          </TabList>

          <TabPanel>
            <h1>{mainTitle0}</h1>
            <h2>{desc0}</h2>

            <ul className={card.Elements}>
              {data0.objkts.map((item, token_id) => (
                <CardElement card={card} item={item} />
              ))}
            </ul>
          </TabPanel>

          <TabPanel>
            <h1>{mainTitle1}</h1>
            <h2>{desc1}</h2>

            <ul className={card.Elements}>
              {data1.objkts.map((item, token_id) => (
                <CardElement card={card} item={item} />
              ))}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default ObjktRender

import React from 'react'
import LazyLoad from 'react-lazyload'
import LazyPlaceholder from './LazyPlaceholder'

const ObjktCard = ({ item, card }) => {
  return (
    <>
      <div className={card.ElementInner}>
        <LazyLoad height={280} offset={100} placeholder={<LazyPlaceholder />}>
          <img
            className={card.Img}
            src={`https://ipfs.io/ipfs/${item.thumbnail_uri.slice(7)}`}
            alt={item.name}
            width="350"
            height="280"
          />
        </LazyLoad>

        <div className={card.Content}>
          <a
            href={`https://objkt.com/asset/${item.fa.contract}/${item.token_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{item.name}</h2>
          </a>

          <p>{item.description}</p>
        </div>
      </div>
    </>
  )
}

export default ObjktCard

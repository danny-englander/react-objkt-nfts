import React from 'react'

const ObjktCard = ({ item, card }) => {
  return (
    <>
      <div className={card.ElementInner}>
        <img
          className={card.Img}
          src={`https://ipfs.io/ipfs/${item.thumbnail_uri.slice(7)}`}
          alt={item.name}
          width="350"
          height="280"
          loading="lazy"
        />

        <div className={card.Content}>
          <h2>
            <a
              href={`https://objkt.com/asset/${item.fa.contract}/${item.token_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </h2>

          <p>{item.description}</p>
        </div>
      </div>
    </>
  )
}

export default ObjktCard

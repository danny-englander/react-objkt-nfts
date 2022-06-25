import React from 'react'

const ObjktCard = ({ item, card }) => {
  return (
    <>
      <div className={card.ElementInner}>
        <picture>
          <figure>
            <source
              srcset={`/assets/nft-dist/${item.fa.contract}-${item.token_id}.webp`}
              type="image/webp"
            />

            <img
              src={`/assets/nft-dist/${item.fa.contract}-${item.token_id}.jpg`}
              className={card.Img}
              alt={item.name}
              width="800"
              height="1000"
              loading="lazy"
            />
          </figure>
        </picture>

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

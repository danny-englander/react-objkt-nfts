import React from 'react'
import LazyLoad from 'react-lazyload'
import LazyPlaceholder from './LazyPlaceholder'

const CardElement = ({ data, card }) => {
  return (
    <>
      <ul className={card.Elements}>
        {data.objkts.map((item, token_id) => (
          <li
            key={item.token_id}
            id={`item-${item.token_id}`}
            className={`${card.Element} ${item.tags
              .map((tag_item) => `tag-${tag_item.tag.name}`)
              .toString()
              .replaceAll(' ', '-')
              .replaceAll(',', ' ')}`}
          >
            <div className={card.ElementInner}>
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

              <a
                href={`https://objkt.com/asset/${item.fa.contract}/${item.token_id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>{item.name}</h2>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CardElement

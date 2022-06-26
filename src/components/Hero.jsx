import React from 'react'
import hero from '../styles/css/css-modules/Hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={hero.Wrap}>
        <div className={hero.Media}>
          <figure>
            <picture>
              <source srcset="/assets/banner/banner.webp" type="image/webp" />

              <img
                className={hero.Banner}
                src="/assets/banner/banner.jpg"
                alt="Objkt.com NFT Collections by Danny Englander"
                loading="lazy"
                width="1600"
                height="333"
              />
            </picture>
          </figure>
        </div>

        <div className={hero.TitleWrap}>
          <h1 className={hero.Title}>
            Objkt.com NFT Collections by Danny Englander
          </h1>
        </div>
      </div>
    </>
  )
}

export default Hero

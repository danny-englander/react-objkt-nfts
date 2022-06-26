import React from 'react'
import container from '../styles/css/css-modules/Container.module.css'
import header from '../styles/css/css-modules/Header.module.css'

const Header = () => {
  return (
    <>
      <header>
        <div className={header.BG}>
          <div className={container.Layout}>
            <img
              className={header.Logo}
              src="/assets/logo.svg"
              alt="Danny Englander Art"
              width="600"
              height="50"
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

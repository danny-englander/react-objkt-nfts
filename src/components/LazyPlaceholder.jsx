import React from 'react'
import spinner from '../assets/svg/spinner.svg';

const LazyPlaceholder = () => {
  return (
    <>
    <img src={spinner} width='500' height='500' className='spinner' alt='' />
    </>
  )
}

export default LazyPlaceholder

import React from 'react'
import logo from './../assets/logo.png'
import './../assets/header.scss'

type HeaderObject = {
  image: string,
  alt: string
}

const Header = () => {
  const HeaderInfo: HeaderObject = {
    image: logo,
    alt: 'GuiltyGearXrd Rev2'
  }

  return(
    <>
      <header className='ft-header'>
        <div className='ft-header-wrap'>
          <a href='./' className='ft-header-logo'>
            <img src={HeaderInfo.image} alt={HeaderInfo.alt} width='35%' />
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
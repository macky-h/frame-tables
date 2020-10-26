import React from 'react'
import './../../../assets/header.scss'

type HeaderTypeProps = {
  image: string,
  alt: string
}

export const Header:React.FC<HeaderTypeProps> = ({image, alt}) => {
  return(
    <header className='ft-header'>
      <div className='ft-header-wrap'>
        <a href='./' className='ft-header-logo'>
          <img src={image} alt={alt}  width='35%' />
        </a>
      </div>
    </header>
  )
}
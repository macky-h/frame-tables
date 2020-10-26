import React from 'react'
import './../../../assets/about.scss'

type AboutTypeProps = {
  title: string,
  text: string
}

export const About:React.FC<AboutTypeProps> = ({title, text}) => {
  return(
    <section className='ft-about'>
      <h1 className='ft-about-title'>{title}</h1>
      <p className='ft-about-text'>{text}</p>
    </section>
  )
}
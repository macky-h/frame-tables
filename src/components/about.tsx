import React from 'react'
import './../assets/about.scss'

type AboutObject = {
  title: string,
  text: string
}

const About = () => {
  const AboutInfo: AboutObject = {
    title: 'GGXrd Rev2 Frame Tables',
    text: '格闘ゲームGuiltyGear Xrd のレスポンシブ対応フレーム表です'
  }
  return(
    <>
      <section className='ft-about'>
        <h1 className='ft-about-title'>{AboutInfo.title}</h1>
        <p className='ft-about-text'>{AboutInfo.text}</p>
      </section>
    </>
  )
}

export default About
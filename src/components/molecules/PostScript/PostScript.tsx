import React from 'react'
import './../../../assets/postscript.scss'
import { SectionTitle } from '../../atoms/SectionTitle'
import { Twitter } from '../../atoms/Twitter'

export const PostScript = () => {
  return(
    <section className='ft-postscript'>
      <SectionTitle text='PostScript' />
      <div>
        <Twitter />
      </div>
    </section>
  )
}
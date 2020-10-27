import React from 'react'
import '../../../assets/movie.scss'
import { SectionTitle } from '../../atoms/SectionTitle'
import { Youtube } from './../../atoms/Youtube'

const MovieSet = {
  videoId: 'vAJUvy4ibeA',
  videoOpt: {
    height: '270',
    width: '375'
  }
}

export const Movie = () => {
  return(
    <section className='ft-movie'>
      <SectionTitle text='Movie' />
      <Youtube movieInfo={MovieSet} />
    </section>
  )
}
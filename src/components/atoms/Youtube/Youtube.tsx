import React from 'react'
import ReactYoutube from 'react-youtube'

type MovieDataProps = {
  movieInfo: {
    videoId: string,
    videoOpt: {
      height: string,
      width: string
    }
  } 
}

export const Youtube: React.FC<MovieDataProps> = ({movieInfo}) => {
  return(
    <ReactYoutube
      className='ft-movie-frame'
      videoId={movieInfo.videoId}
      opts={movieInfo.videoOpt}
    />
  )
} 
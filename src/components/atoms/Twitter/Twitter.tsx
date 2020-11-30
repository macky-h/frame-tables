import React from 'react'
import { Tweet, Follow, Share } from 'react-twitter-widgets'

export const Twitter = () => (
  <>
    <Tweet
      tweetId='1167334358727847936'
      options={{
        height: '300',
        theme: 'dark'
      }}
    />
    <div className='ft-postscript-box'>
    <div className='ft-postscript-tag'>
        <Follow
          username='Heroooo10847656'
          options={{
            lang: 'ja'
          }}
        />
      </div>
      <div className='ft-postscript-tag'>
        <Share
          url='https://ggxrdrev2-frametable.firebaseapp.com'
          options={{
            lang: 'ja'
          }}
        />
      </div>
    </div>
  </>
)
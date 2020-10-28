import React from 'react'
import { CharacterSelect } from '../../molecules/CharacterSelect'
import { About } from '../../molecules/About'
import { FrameTables } from '../../molecules/FrameTables'
import { PostScript } from '../../molecules/PostScript'
import { Movie } from '../../molecules/Movie'

export const Top: React.FC = () => {
  return (
    <>
      <div className="ft-container">
        <About title='GGXrd Rev2 Frame Tables' text='格闘ゲームGuiltyGear Xrd のレスポンシブ対応フレーム表です' />
        <CharacterSelect />
        <FrameTables />
        <Movie />
        <PostScript />
      </div>
    </>
  )
}

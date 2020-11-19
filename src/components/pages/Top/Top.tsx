import React, { useState } from 'react'
import { CharacterSelect } from '../../molecules/CharacterSelect'
import { About } from '../../molecules/About'
import { PostScript } from '../../molecules/PostScript'
import { Movie } from '../../molecules/Movie'
import { FrameTablesContainer } from '../../../containers/FrameTablesContainer/FrameTablesContainer'

export const Top: React.FC = () => {
  const [name, setName] = useState('sol')
  const handleChange = (value:string) => {
    setName(value)
  }
  return (
    <>
      <div className="ft-container">
        <About title='GGXrd Rev2 Frame Tables' text='格闘ゲームGuiltyGear Xrd のレスポンシブ対応フレーム表です' />
        <CharacterSelect handler={handleChange} />
        <FrameTablesContainer currentName={name} />
        <Movie />
        <PostScript />
      </div>
    </>
  )
}

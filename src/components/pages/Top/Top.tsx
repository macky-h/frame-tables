import React from 'react'
import About from '../../../modules/about'
import { CharacterSelect } from '../../molecules/CharacterSelect'
import Table from '../../../modules/table'

export const Top: React.FC = () => {
  return (
    <>
      <div className="ft-container">
        <About />
        <CharacterSelect />
        <Table />
      </div>
    </>
  )
}

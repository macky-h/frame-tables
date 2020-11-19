import React from 'react'
import '../../../assets/selector.scss'
import { SelectBox } from '../../atoms/SelectBox'
import { characterList } from '../../../modules/data'
import { SectionTitle } from '../../atoms/SectionTitle'

type CharacterSelectProps = {
  handler: (value: string) => void
}

export const CharacterSelect:React.FC<CharacterSelectProps> = ({ handler }) => {
  const list = characterList.map(({ name, value }) => ({
    name,
    value,
  }))

  return (
    <section className="ft-selector">
      <SectionTitle text="Characters" />
      <div className="ft-selector-box">
        <h3 className="ft-selector-subtitle">キャラクター選択：</h3>
        <div className="ft-selector-content">
          <SelectBox list={list} selectHandler={handler} />
        </div>
      </div>
    </section>
  )
}

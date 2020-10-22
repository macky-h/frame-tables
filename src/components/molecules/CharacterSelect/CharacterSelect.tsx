import React from 'react'
import '../../../assets/selector.scss'
import { SelectBox } from '../../atoms/SelectBox'
import { characterList } from '../../../modules/data'
import { SectionTitle } from '../../atoms/SectionTitle'

export const CharacterSelect = () => {
  const list = characterList.map(({ name, value }) => ({
    name,
    value,
  }))

  return (
    <section className="ft-selector">
      <SectionTitle text="Frame Tables" />
      <div className="ft-selector-box">
        <h3 className="ft-selector-subtitle">キャラクター選択：</h3>
        <div className="ft-selector-content">
          <SelectBox list={list} />
        </div>
      </div>
    </section>
  )
}

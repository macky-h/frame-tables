import React from 'react'
import { Option } from './Options'

type Character = {
  name: string
  value: string
}

type SelectBoxProps = {
  list: Character[]
  selectHandler: (value: string) => void
}

export const SelectBox: React.FC<SelectBoxProps> = ({ list, selectHandler }) => {
  return (
    <select onChange={e => {selectHandler(e.target.value)}}>
      {list.map(({ name, value }) => (
        <Option key={`character-${value}-${name}`} name={name} value={value} />
      ))}
    </select>
  )
}

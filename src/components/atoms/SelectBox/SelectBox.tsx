import React from 'react'
import { Option } from './Options'

type Character = {
  name: string
  value: string
}

type SelectBoxProps = {
  list: Character[]
}

export const SelectBox: React.FC<SelectBoxProps> = ({ list }) => (
  <select>
    {list.map(({ name, value }) => (
      <Option key={`character-${value}-${name}`} name={name} value={value} />
    ))}
  </select>
)

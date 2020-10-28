import React from 'react'
import Axios from 'axios'
import { Option } from './Options'

type Character = {
  name: string
  value: string
}

type SelectBoxProps = {
  list: Character[]
}

const HandleChange = () => {
  console.log('AAA')
  Axios.get('./src/data/sol.json')
}

export const SelectBox: React.FC<SelectBoxProps> = ({ list }) => (
  <select onChange={HandleChange}>
    {list.map(({ name, value }) => (
      <Option key={`character-${value}-${name}`} name={name} value={value} />
    ))}
  </select>
)

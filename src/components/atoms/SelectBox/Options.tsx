import React from 'react'

type OptionsProps = {
  name: string
  value: string
}

export const Option: React.FC<OptionsProps> = ({ name, value }) => {
  return <option value={value}>{name}</option>
}

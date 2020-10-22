import React from 'react'

type OptionsText = {
  name: string,
  param: string
}

const SelectOptions: React.FC<OptionsText> = ({name, param}) => {
  return(
    <option value={param}>{name}</option>
  )
}

export default SelectOptions
import React from 'react'

type CharacterColumnProps = {
  dataColumn: {
    name: string,
    occur: string,
    rigid: string,
    invincible: string,
    advantage: string
  }
}

export const Column:React.FC<CharacterColumnProps> = ({dataColumn}) => {
  return(
    <>
      <tr>
        <td><p className="ft-table-text">{dataColumn.name}</p></td>
        <td><p className="ft-table-text">{dataColumn.occur}</p></td>
        <td className={dataColumn.advantage === "1" ? "ft-table-advantage" : '' }><p className="ft-table-text">{dataColumn.rigid}</p></td>
        <td><p className="ft-table-text">{dataColumn.invincible}</p></td>
      </tr>
    </>
  )
}
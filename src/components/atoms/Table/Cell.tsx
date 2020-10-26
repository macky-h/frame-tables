import React from 'react'

type TechTypeProps = {
  tech: string
}

export const CellTh: React.FC<TechTypeProps> = ({tech}) => {
  return(
    <>
      <th><p className="ft-table-item">{tech}</p></th>
    </>
  )
}
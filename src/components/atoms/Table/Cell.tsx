import React from 'react'

type TechTypeProps = {
  tech: string
}

export const CellTh: React.FC<TechTypeProps> = ({tech}) => {
  return(
    <>
      <th><span className="ft-table-item">{tech}</span></th>
    </>
  )
}
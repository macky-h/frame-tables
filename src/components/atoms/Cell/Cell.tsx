import React from 'react'

type CellTypeProps = {
  tech: string
}

export const Cell: React.FC<CellTypeProps> = ({tech}) => <th><span className="ft-table-item">{tech}</span></th>
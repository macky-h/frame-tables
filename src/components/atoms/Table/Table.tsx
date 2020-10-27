import React from 'react'
import { CellTh } from './Cell'

type TableTypeProps = {
  list: string[]
}

export const Table: React.FC<TableTypeProps> = ({list}) => {
  return(
    <table className="ft-table-body">
      <thead>
        <tr>
          {list.map((title) => <CellTh key={`table-${title}`} tech={title} />)}
        </tr>
      </thead>
    </table>
  )
}

import React from 'react'
import { CellTh } from './Cell'

type TableTypeProps = {
  list: string[]
}

export const Table: React.FC<TableTypeProps> = ({list}) => {
  return(
    <table className="ft-table-body">
      <thead>
        {list.map(title => <CellTh tech={title} />)}
      </thead>
    </table>
  )
}

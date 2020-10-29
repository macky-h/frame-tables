import React from 'react'
import '../../../assets/table.scss'
import { SectionTitle } from './../../atoms/SectionTitle'
import { Cell } from './../../atoms/Cell'

const TitleList = ['技名', '発生', '硬直', '無敵']

export const FrameTables: React.FC = () => {
  return(
    <section className="ft-table">
      <SectionTitle text="Frame Tables" />
      <table className="ft-table-body">
        <thead>
          <tr>
            {TitleList.map((title) => <Cell key={`table-${title}`} tech={title} />)}
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
  )
}
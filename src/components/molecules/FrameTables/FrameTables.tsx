import React from 'react'
import '../../../assets/table.scss'
import { SectionTitle } from './../../atoms/SectionTitle'
import { CellTh } from './../../atoms/Cell'
import { Column } from './../../atoms/Column'

type Tech = {
  name: string,
  occur: string,
  rigid: string,
  invincible: string,
  advantage: string
}

export type FrameTablesProps = {
  titleList: string[]
  techList: Tech[]
}

export const FrameTables: React.FC<FrameTablesProps> = ({ titleList, techList }) => (
    <section className="ft-table">
      <SectionTitle text="Frame Tables" />
      <div className="ft-table-wrapper">
        <table className="ft-table-body">
          <thead>
            <tr>
              {titleList.map((title) => <CellTh key={`table-${title}`} tech={title} />)}
            </tr>
          </thead>
          <tbody>
            {techList.map((tech, index) => <Column key={`table-${index}`} dataColumn={tech} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
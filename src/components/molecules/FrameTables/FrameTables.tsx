import React from 'react'
import '../../../assets/table.scss'
import { SectionTitle } from './../../atoms/SectionTitle'
import { Table } from './../../atoms/Table'

const TitleList = ['技名', '発生', '硬直', '無敵']

export const FrameTables = () => {
  return(
    <section className="ft-table">
      <SectionTitle text="Frame Tables" />
      <Table list={TitleList} />
    </section>
  )
}
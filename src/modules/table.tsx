import React from 'react'
import './../assets/table.scss'
import { SectionTitle } from '../components/atoms/SectionTitle'

const Table: React.FC = () => {
  return (
    <>
      <section className="ft-table">
        <SectionTitle text="Frame Tables" />
        <table className="ft-table-body">
          <thead>
            <tr>
              <th>
                <p className="ft-table-item">技名</p>
              </th>
              <th>
                <p className="ft-table-item">発生</p>
              </th>
              <th>
                <p className="ft-table-item">硬直</p>
              </th>
              <th>
                <p className="ft-table-item">無敵</p>
              </th>
            </tr>
          </thead>
        </table>
      </section>
    </>
  )
}

export default Table


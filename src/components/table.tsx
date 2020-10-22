import React from 'react'
import './../assets/table.scss'


const Table = () => {
  return(
    <>
      <section className='ft-table'>
        <h2 className='ft-table-title'>Frame Tables</h2>
        <table className='ft-table-body'>
          <thead>
            <tr>
              <th><p className='ft-table-item'>技名</p></th>
              <th><p className='ft-table-item'>発生</p></th>
              <th><p className='ft-table-item'>硬直</p></th>
              <th><p className='ft-table-item'>無敵</p></th>
            </tr>
          </thead>
        </table>
      </section>
    </>
  )
}

export default Table
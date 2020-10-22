import React from 'react'

import About from './../modules/about'
import Selector from './../modules/selector'
import Table from './../modules/table'

const Container: React.FC = () => {
  return(
    <>
      <div className='ft-container'>
        <About />
        <Selector />
        <Table />
      </div>
    </>
  )
}

export default Container
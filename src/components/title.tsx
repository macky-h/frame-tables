import React from 'react'

type PropsTitle = {
  text: string
}

const SectionTitle: React.FC<PropsTitle> = ({text}) => {
  return(
    <>
      <h2 className='ft-selector-title'>{text}</h2>
    </>
  )
}

export default SectionTitle
import React from 'react'
import './../assets/selector.scss'

type HandleChangeType = React.ChangeEvent<HTMLSelectElement>

// const handleChangeSelect = (event: HandleChangeType): void => {
//   console.log(event)
// }

const Selector: React.FC = (itemList: any) => {
  const listDom: Array<any> = itemList.map((item: any, index: number) => 
    <option key={index} value={item.param}>{item.name}</option>
  )
  return(
    <>
      <section className='ft-selector'>
        <h2 className='ft-selector-title'>Characters</h2>
        <div className='ft-selector-box'>
          <h3 className='ft-selector-subtitle'>キャラクター選択：</h3>
          <div className='ft-selector-content'>
          <select>{listDom}</select>
          </div>
        </div>
      </section>
    </>
  )
}

// const Selector: React.FC<CharactersList> = ({itemList}) => {
  // const listDom: Array<any> = itemList.map((item, index) => 
  //   <option key={index} value={item.param}>{item.name}</option>
  // )
//   return(
    // <>
    //   <section className='ft-selector'>
    //     <h2 className='ft-selector-title'>Characters</h2>
    //     <div className='ft-selector-box'>
    //       <h3 className='ft-selector-subtitle'>キャラクター選択：</h3>
    //       <div className='ft-selector-content'>
    //         <select onChange={handleChangeSelect}>{listDom}</select>
    //       </div>
    //     </div>
    //   </section>
    // </>
//   )
// }

export default Selector
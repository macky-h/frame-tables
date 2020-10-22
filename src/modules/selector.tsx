import React from 'react'
import './../assets/selector.scss'

import SectionTitle from './../components/title'
import SelectOptions from './../components/options'

type SelectCharacter = {
  name: string,
  fullname: string,
  param: string
}[]

const characters: SelectCharacter = [
  {
    name: 'ソル',
    fullname: 'ソル=バッドガイ',
    param: 'sol'
  },
  {
    name: 'カイ',
    fullname: 'カイ=キスク',
    param: 'kay'
  },
  {
    name: 'メイ',
    fullname: 'メイ',
    param: 'may'
  },
  {
    name: 'ミリア',
    fullname: 'ミリア=レイジ',
    param: 'millia'
  },
  {
    name: 'ファウスト',
    fullname: 'ファウスト',
    param: 'faust'
  },
  {
    name: 'ザトー',
    fullname: 'ザトーONE',
    param: 'zato'
  },
  {
    name: 'チップ',
    fullname: 'チップ=ザナフ',
    param: 'chipp'
  },
  {
    name: 'イノ',
    fullname: 'イノ',
    param: 'ino'
  },
  {
    name: 'アクセル',
    fullname: 'アクセル=ロウ',
    param: 'axl'
  },
  {
    name: 'ヴェノム',
    fullname: 'ヴェノム',
    param: 'venom'
  },
  {
    name: 'ポチョムキン',
    fullname: 'ポチョムキン',
    param: 'potemkin'
  },
  {
    name: 'スレイヤー',
    fullname: 'スレイヤー',
    param: 'slayer'
  },
  {
    name: 'シン',
    fullname: 'シン=キスク',
    param: 'sin'
  },
  {
    name: 'ラムレザル',
    fullname: 'ラムレザル=ヴァレンタイン',
    param: 'ramlethal'
  },
  {
    name: 'エルフェルト',
    fullname: 'エルフェルト=ヴァレンタイン',
    param: 'elphelt'
  },
  {
    name: 'レオ',
    fullname: 'レオ=ホワイトファング',
    param: 'leo'
  },
  {
    name: '紗夢',
    fullname: '蔵土縁 紗夢',
    param: 'jam'
  },
  {
    name: '梅喧',
    fullname: '梅喧',
    param: 'johnny'
  },
  {
    name: 'ジョニー',
    fullname: 'ジョニー',
    param: 'baiken'
  },
  {
    name: 'ディズィー',
    fullname: 'ディズィー',
    param: 'dizzy'
  },
  {
    name: 'ベッドマン',
    fullname: 'ベッドマン',
    param: 'bedman'
  },
  {
    name: 'ジャック・O',
    fullname: 'ジャック・O',
    param: 'jack'
  },
  {
    name: 'レイヴン',
    fullname: 'レイヴン',
    param: 'raven'
  },
  {
    name: 'アンサー',
    fullname: 'アンサー',
    param: 'answer'
  },
  {
    name: 'クム',
    fullname: 'クム=へヒョン',
    param: 'kum'
  }
]

const Selector = () => {
  const listDom: Array<any> = characters.map((item: any) => 
    <SelectOptions name={item.name} param={item.param} />
  )
  return(
    <>
      <section className='ft-selector'>
        <SectionTitle text='Frame Tables' />
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

export default Selector
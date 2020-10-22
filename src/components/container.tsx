import React from 'react'

import About from './about'
import Selector from './selector'
import Table from './table'

const characters = [
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

const Container: React.FC = () => {
  return(
    <>
      <div className='ft-container'>
        <About />
        <Selector itemList={characters} />
        <Table />
      </div>
    </>
  )
}

export default Container
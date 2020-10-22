import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Header from './modules/header'
import './assets/index.scss'
import { Top } from './components/pages/Top'

// styleのリセット
const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="ft-container">
        <Top />
      </main>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


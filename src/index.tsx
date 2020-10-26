import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import './assets/index.scss'
import logo from './assets/logo.png'
import { Header } from './components/molecules/Header/'
import { Top } from './components/pages/Top'

// styleのリセット
const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header image={logo} alt='GuiltyGearXrd Rev2' />
      <main className="ft-container">
        <Top />
      </main>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Header from './components/header'
import Container from './components/container'
import './assets/index.scss'

// styleのリセット
const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App = () => {
  return(
    <>
      <GlobalStyle />
      <Header />
      <main className='ft-container'>
        <Container />
      </main>
    </>
  )
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
);
import './App.css'
import Header from './componentes/Header'
import styled from 'styled-components'
import Search from './componentes/Search/Search'
import UltimosLancamentos from './componentes/ultimosLancamentos/UltimosLancamentos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #002F52 35%, #326589);
`

function App() {
  return (

    <AppContainer>

      <Header />

      <Search />
      <UltimosLancamentos />


    </AppContainer>

  )
}

export default App
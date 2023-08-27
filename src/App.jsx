import './App.css'
import Home from "./views/Home/Home"
import { ThemeProvider } from '@emotion/react'
import {theme} from "./Styles/ThemeProvider"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './views/Contacto/Contacto'


function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="contacto" element={<Contacto/>}></Route>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

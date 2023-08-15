import './App.css'
import Home from "./views/Home/Home"
import { ThemeProvider } from '@emotion/react'
import {theme} from "./Styles/ThemeProvider"


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Home/>
    </ThemeProvider>
  )
}

export default App

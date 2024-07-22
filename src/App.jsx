import { useState } from 'react'

import './App.css'
import Nav from './component/Nav'
import Header from './component/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <Nav/>
      <Header/>
      </div>
    </>
  )
}

export default App

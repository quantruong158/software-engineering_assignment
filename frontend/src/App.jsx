import { useState, useEffect } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      {/* <Login />  */}
      <Footer />
    </>
  )
}

export default App

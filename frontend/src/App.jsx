import { useState, useEffect } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import UploadSection from './components/UploadSection'
import PrintSection from './components/PrintSection'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  return (
    <>
      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <>
          <NavBar setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route
              path='/upload'
              element={
                <UploadSection
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                />
              }
            />
            <Route
              path='/print'
              element={<PrintSection file={selectedFile} setSelectedFile={setSelectedFile}/>}
            />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App

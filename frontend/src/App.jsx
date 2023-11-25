import { useState, useEffect } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import UploadSection from './components/UploadSection'
import PrintSection from './components/PrintSection'
import { Route, Routes } from 'react-router-dom'
import SSOPage from './components/SSOPage'
import PrivateRoutes from './components/PrivateRoutes'
import HistorySection from './components/HistorySection'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [balance, setBalance] = useState(0)
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/sso'
          element={<SSOPage setCurrentUser={setCurrentUser} />}
        />
        <Route
          element={
            <>
              <NavBar setCurrentUser={setCurrentUser} />
              <PrivateRoutes currentUser={currentUser} />
              <Footer />
            </>
          }
        >
          <Route path='/' element={<Home />} />
          <Route
            path='/home'
            element={
              <Home
                balance={balance}
                setBalance={setBalance}
                currentUser={currentUser}
              />
            }
          />
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
            element={
              <PrintSection
                balance={balance}
                setBalance={setBalance}
                currentUser={currentUser}
                file={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            }
          />
          <Route
            path='/history'
            element={
              <HistorySection
                currentUser={currentUser}
              />
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App

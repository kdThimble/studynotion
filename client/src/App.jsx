
import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import VerifyEmail from './Pages/VerifyEmail'

function App() {
 

  return (
    <>
      <div className='min-h-screen w-screen bg-richblack-900 flex flex-col font-inter' >
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/signup" element={<Signup /> }/>
        <Route path="/login" element={<Login /> }/>
        <Route path="/verify-email" element={<VerifyEmail /> }/>
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      </div>
    </>
  )
}

export default App

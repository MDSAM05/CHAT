import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import  Home  from "./pages/Home";
import Signup from "./pages/SignUp";
import  Login  from "./pages/Login"

function App() {


  return(
    <div className ="h-screen  bg-gray-100 bg-font-mono flex justify-center">
      <Routes>
         <Route path = "" element = { <Home />} />
         <Route path = "/signup" element = {<Signup />} />
         <Route path = "/login" element = {<Login />} />
      </Routes>
  </div>
  )
}

export default App

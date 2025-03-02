import { useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom"
import  Home  from "./pages/Home";
import Signup from "./pages/SignUp";
import  Login  from "./pages/Login"
import { useAuthcontext } from './context/AuthContext';

function App() {

  const { authUser, isLoading, setAuthUser} = useAuthcontext();
  console.log("Auth User", authUser)

  if(isLoading) return null;
  return(
    <div className ="h-screen bg-font-mono flex justify-center">
      <Routes>
         <Route path = "" element = {authUser ? <Home /> : < Navigate to = {"/Login"} />} />
         <Route path = "/signup" element = { !authUser ? <Signup /> : < Navigate to = {"/"} />} />
         <Route path = "/login" element = { !authUser ? <Login /> : <Navigate to = {"/"}/>} />
      </Routes>
  </div>
  )
}

export default App

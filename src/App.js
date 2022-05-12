import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Layout from './Layout/Layout.js'

function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App
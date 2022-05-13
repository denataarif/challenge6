import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import userSlice from './store/user.js'
import Login from "./Page/Login";
import Register from "./Page/Register";
import Layout from './Layout/Layout.js'
import userPage from "./Page/User";
import Admin from "./Page/Admin";
import ProtectedRoute from "./HOC/ProtectedRoute";
import UnprotectRoute from "./HOC/UnprotectedRoute"
import AdminProtectedRoute from "./HOC/AdminProtectedRoute.js";
import Logout from './Page/Logout'
import Home from './Page/User'

function App() {
  const dispatch = useDispatch();

	useEffect(() => {
		try {
			const token = localStorage.getItem("challengeAccessToken");
			const userData = jwtDecode(token);

			axios.get(`http://localhost:4000/users/${userData.sub}`).then((res) => {
				dispatch(userSlice.actions.addUser({ userData: res.data }));
			});
		} catch {}
	}, []);
  return(
    <BrowserRouter>
        <Routes>
          {/* ALL */}
          <Route path="/" element={<Home/>}/>
          <Route path="/logout" element={<Logout />} />
         
          {/* PUBLIC ONLY */}

            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>

          
          {/* PROTECTED */}
          <Route path="/" element={<ProtectedRoute/>}>
            <Route path="/user" element={<Home/>}/>
          </Route>

          <Route path="/" element={<ProtectedRoute/>}>
            <Route path='/admin' element={<Admin/>}/>
          </Route>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App
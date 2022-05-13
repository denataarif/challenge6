import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'


const AdminProtectedRoute = () => {

    const user = useSelector( store => store.user.data )

    if ( user.isAdmin === true ){
        return(
            <Navigate to='/admin' />
        )
    } else{
        return(
            <Outlet/>
        )
    }
   
}

export default AdminProtectedRoute
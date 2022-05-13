import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'


const ProtectRoute = () => {

    const user = useSelector( store => store.user.data )

    if ( user !== null ){
        return(
            <Outlet/>
        )
    } else{
        return(
            <Navigate to='/login' />
        )
    }
   
}

export default ProtectRoute
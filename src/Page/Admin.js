import React from 'react'
import { useNavigate } from 'react-router';

const Admin = () => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate('/logout');
      }

    return(
        <div>
            <h2>Ini Page Admin</h2>
            <button className="register btn btn-success ml-3" onClick={logoutHandler}>Log out</button>
        </div>
    )
}

export default Admin
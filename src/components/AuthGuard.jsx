import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AuthGuard() {
    const isLogged = sessionStorage.getItem("token");
  
  return (
    <div>
        {isLogged ? <Outlet/> : <Navigate replace to={"/"}/>}
        
    </div>
  )
}

export default AuthGuard;
import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, Navigate } from "react-router-dom";
// Outlet Tell React Router where to render child routes
// Navigate Redirigir una ruta con React Router

import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);
  
  // use loggedIn to return a Navigate
  if(!loggedIn) {
    return <Navigate to="/sign-up"/>
  }

  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`edit`}>Edit</Link>
      <Outlet/>
         
    </main>
  )
}

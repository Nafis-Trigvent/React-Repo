import React from 'react'
import { Auth } from './Auth'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
 
  return Auth() ? <Outlet/> : <Navigate to="/login" replace/>
}

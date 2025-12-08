import React from 'react'

export const Auth = () => {
  return localStorage.getItem("token") !== null 
}

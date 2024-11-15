import React, { useContext } from 'react'
import { AuthContext } from './Provider/AuthContextFun'
import { Navigate } from 'react-router-dom'

export default function PriviteRoute({children}) {
    const {user} = useContext(AuthContext) 

    if(user && user?.email) {
        return children
    }
    return <Navigate to={'/auth/login'}></Navigate>
  return (
    <div>
      
    </div>
  )
}

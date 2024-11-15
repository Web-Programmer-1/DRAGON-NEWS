import React, { useContext } from 'react'
import { AuthContext } from './Provider/AuthContextFun'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from './Loading'

export default function PriviteRoute({children}) {
    const {user, loading} = useContext(AuthContext) 
    const location = useLocation()
    // console.log(location)
    if(loading){
      return <Loading></Loading>
    }

    if(user ) {
        return children
    }
    return <Navigate state={loading.pathname} to={'/auth/login'}></Navigate>
 
}

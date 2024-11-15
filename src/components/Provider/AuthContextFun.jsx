
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';


export const AuthContext = createContext();

export default function AuthContextFun({ children }) {

const [newUser, setnewUser] = useState(null);


  const createEmailAndPassword = (email, password) =>{

    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setnewUser(currentUser);
      console.log(currentUser);

    })
    return () => {
      unsubscribe();
    }
  },[])

  const logOut = () => {
    return signOut(auth)
  }
 

  const infoValue = {
    createEmailAndPassword,
    logOut,
    newUser,
    setnewUser,
    userLogin
    
   
  };

  return (
    <div>
      <AuthContext.Provider value={infoValue}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

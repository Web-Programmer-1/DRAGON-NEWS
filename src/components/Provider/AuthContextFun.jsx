
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';


export const AuthContext = createContext();

export default function AuthContextFun({ children }) {

const [newUser, setnewUser] = useState(null);
const [loading, setloading] = useState(true);



  const createEmailAndPassword = (email, password) =>{
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {

    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setnewUser(currentUser);
      console.log(currentUser);
      setloading(false);

    })

    return () =>  unsubscribe();
     
    }
,[])


 

  const infoValue = {
    createEmailAndPassword,
    logOut,
    newUser,
    setnewUser,
    userLogin,
    loading
    
   
  };

  return (
    <div>
      <AuthContext.Provider value={infoValue}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

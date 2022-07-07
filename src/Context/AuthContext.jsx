import { useState } from "react";
import { createContext } from "react";


export const AuthContext =createContext()

export const AuthContextProvider=({children})=>
{
    const[isAuth , setAuth] = useState(true)

    const logIn =({userName , Password})=>
    {
      if(Password && userName)
      {
        setAuth(true)
      }
    }
    const logOut =()=>
    {
        setAuth(false)
    }
    return (
        <AuthContextProvider value={{isAuth , logIn , logOut}}>
            {children}
        </AuthContextProvider>

    )
}
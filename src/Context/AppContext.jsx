import { useState } from "react";
import { createContext } from "react";

export const AppContext =createContext({})

export const AppContextProvider =({children})=>
{const [state ,toggleState ] = useState(0)
  // const [flag , setFlag] = useState(false)
 
 return (
      <AppContextProvider value={[state , toggleState , change]}>
         {children}
      </AppContextProvider>
      )
}
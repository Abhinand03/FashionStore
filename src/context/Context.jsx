import React from 'react'
import { createContext,useState } from 'react'

export const serchcontext=createContext()


function Context({children}) {
    const [search,setsearch]=useState("")

  return (
    
      <>
      <serchcontext.Provider value={{search,setsearch}}>
        {
          children
        }
  
      </serchcontext.Provider>
  
      </>
  )
}

export default Context
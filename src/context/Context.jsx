import React from 'react'
import { createContext, useState } from 'react'

export const serchcontext = createContext()
export const headstatus = createContext()


function Context({ children }) {
  const [search, setsearch] = useState("")
  const [headSt, setheadSt] = useState(false)

  return (

    <>
      <serchcontext.Provider value={{ search, setsearch }}>
        <headstatus.Provider value={{ headSt, setheadSt }}>
          {
            children
          }


        </headstatus.Provider>

      </serchcontext.Provider>

    </>
  )
}

export default Context
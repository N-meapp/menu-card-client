import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { useState } from "react";
import LoginContext from "./components/loginContext";
import RoutesPage from "./components/Routes";
import TableContext from "./components/TableContext";



function App(){

  const [user,setUser] = useState<{username:string;password:string}>({username:'',password:''})
  const [table,setTable] = useState()

  return(
    <> 
    <LoginContext.Provider value={{
      user:user,
      setUser:setUser
    }}>
      <TableContext.Provider value={{
        table:table,
        setTable:setTable
      }}>
      <RoutesPage />
      </TableContext.Provider>
    </LoginContext.Provider>
    </>
  )
}


export default App;
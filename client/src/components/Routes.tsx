import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import Home from "./user/Home";
import LoginContext from "./loginContext";
import TableContext from "./TableContext";

export default function RoutesPage(){
    const {user,setUser} = useContext(LoginContext)
    const {table,setTable} = useContext(TableContext)

    
    console.log(window.location.pathname.slice(1));
    setTable(window.location.pathname.slice(1))

    

    return(
        <>
        <BrowserRouter>
    <Routes>

{table!='admin'?
<>
<Route path={`/${table}`} element={<Home />}></Route>
</>:
<>
<Route path='/admin' element={user.token?<Dashboard />:<AdminLogin />}> </Route>
</>
}
     
      {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
    </Routes>
    </BrowserRouter>
        </>
    )
}
import React, { createContext } from 'react';


// Create a new context
const TableContext = createContext<any>(undefined);


  {/* const LoginContext = React.createContext<
  {
    user: { username: string; password: string };
    setUser: React.Dispatch<React.SetStateAction<{
      username: string;
      password: string;
    }>>;
  } | undefined>(undefined); */}
  



export default TableContext;
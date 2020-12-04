import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export default ({ children }) => {
  // state for authentication
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [sname, setSname] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    let tokens = localStorage.getItem("tokens");
    let name = localStorage.getItem("name");

     if (tokens){
        setIsLoaded(true);
        setIsAuth(true);
        setUser(name);
        setSname(name.charAt(0));
        setToken(tokens)
     }
     else{
        setIsLoaded(true);
     }
    
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading</h1>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuth,
            setIsAuth,
            token,
            setToken,
            open,
            setOpen,
            sname, 
            setSname
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};

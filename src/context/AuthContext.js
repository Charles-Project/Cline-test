import React, { createContext, useState, useEffect } from "react";
 import Loader from 'react-loader-spinner'
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
export const AuthContext = createContext();

// -------------------------------------------
//  import Loader from 'react-loader-spinner'
//  import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
       
            <div className="loader__wrapper">
                   <Loader type="Circles" color="#00BFFF" style={{
                     display: "flex", 
                     justifyContent: "center", 
                     alignItems:"center",
                     width: "100%",
                     background: "white",
                     height: "500% !important"
                   
                   }} height={632} width={80} />
            </div>
           
        

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

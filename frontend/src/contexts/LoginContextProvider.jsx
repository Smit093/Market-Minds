import React, { useState } from "react";
import LoginContext from "./LoginContext";

const LoginContextProvider = ({children})=>{
    const [loggedin, setLoggedin] = useState(false);

    return(
        <LoginContext.Provider value={{loggedin,setLoggedin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;
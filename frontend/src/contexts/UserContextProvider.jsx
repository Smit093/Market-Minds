import { useState } from "react"
import UserContext from './UserContext'
const UserContextProvider = ({children})=>{
    const [userEmail,setUserEmail] = useState('')

    return(
        <UserContext.Provider value={{userEmail,setUserEmail}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
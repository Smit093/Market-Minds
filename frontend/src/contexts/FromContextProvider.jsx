import { useState } from "react"
import FromContext from './FromContext'

const FromContextProvider = ({ children }) => {
    const [from, setFrom] = useState('')

    return (
        <FromContext.Provider value={{ from, setFrom }}>
            {children}
        </FromContext.Provider>
    )
}

export default FromContextProvider;
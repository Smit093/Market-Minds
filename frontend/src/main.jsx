import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContextProvider from './contexts/LoginContextProvider.jsx'
import FromContextProvider from './contexts/FromContextProvider.jsx'
import UserContextProvider from './contexts/UserContextProvider.jsx'


createRoot(document.getElementById('root')).render(
    <LoginContextProvider>
        <FromContextProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </FromContextProvider>
    </LoginContextProvider>
)

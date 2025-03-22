import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            Learn
        </div>
    )
}
createRoot(document.getElementById('root')).render(
    <MyApp />
)

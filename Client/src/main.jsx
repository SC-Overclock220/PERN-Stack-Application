import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BikeContextProvider from './Context/Bike.Context'

createRoot(document.getElementById('root')).render(

  <BikeContextProvider>

    <StrictMode>
      <App />
    </StrictMode>
  </BikeContextProvider>

)

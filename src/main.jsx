import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QRCodeGenerator } from './components/QRCodeGenerator'
//import './index.css'
import "./Qrcode.css";
//import { Card } from "./Card"
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       {/* <App /> 
      <Card /> */}
    
   <QRCodeGenerator />
    
  </StrictMode>,
)

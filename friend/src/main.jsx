import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/ImgVid/Style.css'
import Background from './Background.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Background/>
  </StrictMode>,
)

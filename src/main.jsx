import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import './assets/reset.css'
import MainPage from './components/mainPage/MainPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
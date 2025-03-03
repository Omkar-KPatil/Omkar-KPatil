import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'

import Home from './Components/Home.jsx';


createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

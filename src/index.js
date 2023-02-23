import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WindowSite from './windowSite';


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);

function App() {
    return <>
        <BrowserRouter>
          <div className='app'>
            <Routes>
              <Route path='*' element={<WindowSite />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  }
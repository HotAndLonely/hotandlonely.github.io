import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AnimateBackground from './components/background';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <App />
    <AnimateBackground />
</>
);

reportWebVitals();

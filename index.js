import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './component/home';

import reportWebVitals from './reportWebVitals';

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
const App = () => {
  return ( <div>
    
    <Home />
  </div> );
}
 
root.render(<App/>);  
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import './index.css'
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    devices: new DeviceStore()
   }}> 
    <React.StrictMode>
    <App />
    </React.StrictMode>
 </Context.Provider>
  
);


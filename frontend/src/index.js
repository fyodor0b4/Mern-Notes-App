import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NotContextProvider } from './contexts/NotContext';
import { AuthContextProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <NotContextProvider>
      <App />
    </NotContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);



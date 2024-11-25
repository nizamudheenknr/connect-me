import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='176934146197-uk7qu1eac9hcshs5udm2mg845vmq7l6o.apps.googleusercontent.com'>
  <StrictMode> 
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
   </GoogleOAuthProvider>
);

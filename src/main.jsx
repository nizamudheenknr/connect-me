import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

// Access the Google Client ID from the .env file
const googleClientId = import.meta.env.GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={googleClientId}>
    <StrictMode> 
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
);

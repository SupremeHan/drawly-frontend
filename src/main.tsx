// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Routes';
import { Toaster } from './components/ui/sonner';
import environment from './enviroment';

// TODO: Add config file so that you can import env
createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={environment.googleOauthClient}>
    {/* <StrictMode> */}
    <RouterProvider router={router} />
    <Toaster />
    {/* </StrictMode> */}
  </GoogleOAuthProvider>,
);

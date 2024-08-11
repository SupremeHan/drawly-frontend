import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import LoginPage from './pages/LoginPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage /> // !!TODO: add a landing page
	},
	{
		path: '/login',
		element: <LoginPage />
	},
	{
		path: '/drafts',
		element: <App />
	}
]);

createRoot(document.getElementById('root')!).render(
	<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>
	</GoogleOAuthProvider>
);

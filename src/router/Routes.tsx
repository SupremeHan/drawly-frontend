import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AuthPage from '../pages/auth/AuthPage';
import GoogleOAuthSuccessRedirect from '../pages/auth/GoogleOAuth';
import App from '../App';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage /> // !!TODO: add a landing page
	},
	{
		path: 'auth',
		element: <AuthPage />
	},
	{
		path: 'auth/google-oauth-success-redirect',
		element: <GoogleOAuthSuccessRedirect />
	},
	{
		path: '/drafts',
		element: (
			<ProtectedRoute>
				<App />
			</ProtectedRoute>
		)
	}
]);

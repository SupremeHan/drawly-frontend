import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/landing/LandingPage';
import AuthPage from '../pages/auth/AuthPage';
import GoogleOAuthSuccessRedirect from '../pages/auth/GoogleOAuth';
import App from '../pages/projects/App';
import { ProtectedRoute } from './ProtectedRoute';
import { Dashboard } from '../pages/dashboard/Dashboard';

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
		path: 'projects',
		element: (
			<ProtectedRoute>
				<App />
			</ProtectedRoute>
		)
	},
	{
		path: 'dashboard',
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		)
	}
]);

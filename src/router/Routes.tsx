import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

// pages
import LandingPage from '../pages/landing/LandingPage';
import AuthPage from '../pages/auth/AuthPage';
import GoogleOAuthSuccessRedirect from '../pages/auth/GoogleOAuth';
import ProjectsPage from '../pages/projects/ProjectsPage';
import DrawlyPage from '../pages/drawly/DrawlyPage';
import DrawlyLayout from '../pages/drawly/components/DrawlyLayout';

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
				<DrawlyLayout />
			</ProtectedRoute>
		),
		children: [
			{
				path: '',
				element: <ProjectsPage />
			},
			{
				path: ':projectId',
				element: <DrawlyPage />
			}
		]
	}
]);

import { PropsWithChildren } from 'react';
import { useAuthState } from '../pages/auth/state/state';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export function ProtectedRoute({ children }: PropsWithChildren<{}>) {
	const { user } = useAuthState((state) => state);
	const location = useLocation();

	if (!user) {
		return <Navigate to="/auth" state={{ from: location }} replace />;
	}
	return children;
}

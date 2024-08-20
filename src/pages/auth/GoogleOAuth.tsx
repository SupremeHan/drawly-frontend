import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthState, UserDef } from './state/state';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function GoogleOAuthSuccessRedirect() {
	const [params] = useSearchParams();
	const { setUser } = useAuthState();
	const navigate = useNavigate();

	useEffect(() => {
		const jwtUser = params.get('jwtUser');
		if (jwtUser) {
			const userFromJwt: UserDef = jwtDecode(jwtUser);
			if (userFromJwt) {
				setUser(userFromJwt);
			}
		}

		navigate('/projects');
	}, []);

	return <div>Logging in...</div>;
}

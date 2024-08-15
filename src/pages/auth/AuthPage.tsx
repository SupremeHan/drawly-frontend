import environment from '../../enviroment';

export default function AuthPage() {
	const onGoolgeLogin = () => {
		window.location.href = `${environment.apiUrl}/auth/google`;
	};

	return (
		<div>
			<button className="border border-blue-500" onClick={onGoolgeLogin}>
				Google Login
			</button>
		</div>
	);
}

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';

export default function LoginPage() {
	const responseMessage = (response: CredentialResponse) => {
		console.log(response);
	};
	const errorMessage = () => {
		console.log('Something went wrong!');
	};
	return (
		<div className="flex flex-col justify-start items-center h-[100dvh]">
			<div className="w-[500px] h-[300px] flex flex-col justify-start items-center border border-cyan-600">
				<h3 className="mt-4 mb-4">Login to Drawly!</h3>
				<GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
			</div>
		</div>
	);
}

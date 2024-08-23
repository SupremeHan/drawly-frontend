import { Outlet } from 'react-router-dom';
import { useAuthState } from '../../auth/state/state';

export default function DrawlyLayout() {
	const { user } = useAuthState((state) => state);
	console.log(user);
	return (
		<div className="flex flex-col h-[100dvh]">
			<div className="bg-blue-400 h-[50px] flex justify-between items-center pl-2 pr-2">
				<h3>Drawly</h3>
				<div className="flex gap-2 items-center">
					<h3>{user?.fullName}</h3>
					<img src={user?.picture} alt={user?.fullName} width={30} />
				</div>
			</div>
			<div className="h-full">
				<Outlet />
			</div>
		</div>
	);
}

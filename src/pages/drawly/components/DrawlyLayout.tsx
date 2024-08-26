import { Outlet } from 'react-router-dom';
import { useAuthState } from '../../auth/state/state';
import { Button } from '@/components/ui/button';

export default function DrawlyLayout() {
  const { user, removeUser } = useAuthState((state) => state);

  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="bg-blue-400 h-[50px] flex justify-between items-center pl-2 pr-2">
        <h3>Drawly</h3>
        <div className="flex gap-2 items-center">
          <h3>{user?.fullName}</h3>
          {/* <img src={user?.picture} alt={user?.fullName} width={30} />  TODO: Resolve issue with image 429 error code */}
          <Button variant="outline" size="sm" onClick={() => removeUser()}>
            Sign Out
          </Button>
        </div>
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
}

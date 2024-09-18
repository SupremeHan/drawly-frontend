import { Outlet } from 'react-router-dom';
import { useAuthState } from '../../auth/state/state';
import { Button } from '@/components/ui/button';

export default function DrawlyLayout() {
  const { user, removeUser } = useAuthState((state) => state);

  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="border-2 border-b-[#4A4A4A] h-[50px] flex justify-between items-center p-2">
        <div className="flex">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artbreeder-image-2024-09-13T12_44_10.357Z-8mBjsYlSqoNNlKesNxrOSd5LDCINDY.png"
            alt="Drawly mascot"
            width={30}
            height={30}
          />
          <span className="ml-2 text-xl font-bold text-[#4A4A4A]">Drawly</span>
        </div>
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

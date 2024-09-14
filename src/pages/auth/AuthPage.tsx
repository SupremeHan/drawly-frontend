import environment from '../../enviroment';

export default function AuthPage() {
  const onGoolgeLogin = () => {
    window.location.href = `${environment.apiUrl}/auth/google`;
  };

  return (
    <div className="h-screen flex items-center">
      <div className="flex flex-col justify-around items-center w-[350px] h-[400px] m-auto border-2 border-[#4A4A4A] rounded-md">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artbreeder-image-2024-09-13T12_44_10.357Z-oXbGddE3ZDjVmyNN6wjF8hZohBkyvF.png"
            alt="Drawly Logo"
            width={80}
            height={80}
          />
          <h1 className="font-bold text-3xl text-[#FF9F1C]">
            Welcome to Drawly
          </h1>
          <p className="text-lg text-[#4A4A4A]">Create an account</p>
        </div>
        <button
          className="text-white w-[250px] bg-[#4A4A4A] hover:bg-[#4A4A4A]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between"
          onClick={onGoolgeLogin}
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign up with Google<div></div>
        </button>
      </div>
    </div>
  );
}

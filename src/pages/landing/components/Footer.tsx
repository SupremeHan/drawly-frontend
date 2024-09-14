import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full py-6 bg-white bg-opacity-80 backdrop-blur-md">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artbreeder-image-2024-09-13T12_44_10.357Z-oXbGddE3ZDjVmyNN6wjF8hZohBkyvF.png"
              alt="Drawly Logo"
              width={30}
              height={30}
            />
            <span className="text-[#FF9F1C] font-bold">Drawly</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2023 Drawly. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-[#FF9F1C]"
              to="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-[#FF9F1C]"
              to="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

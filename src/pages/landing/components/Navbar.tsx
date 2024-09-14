import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="relative z-10 px-4 lg:px-6 h-24 flex items-center ">
      <Link className="flex items-center justify-center group" to="/">
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artbreeder-image-2024-09-13T12_44_10.357Z-8mBjsYlSqoNNlKesNxrOSd5LDCINDY.png"
            alt="Drawly mascot"
            width={60}
            height={60}
            className="mr-2 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute -bottom-2 -right-2 bg-[#FF9F1C] text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Woo-hoo!
          </div>
        </div>
        <span className="ml-2 text-3xl font-bold text-[#4A4A4A] group-hover:text-[#FF9F1C] transition-colors duration-300">
          Drawly
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {['Features', 'Pricing', 'Contact'].map((item) => (
          <Link
            key={item}
            className="text-sm font-medium hover:text-[#FF9F1C] transition-colors relative group"
            to={`#${item.toLowerCase()}`}
          >
            {item}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF9F1C] transition-all duration-300 group-hover:w-full"></div>
          </Link>
        ))}
      </nav>
    </header>
  );
}

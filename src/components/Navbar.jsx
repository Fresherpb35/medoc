import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    // { name: 'PRODUCTS', path: '/products' },
    { name: 'THERMOTECH', path: '/thermotech' },
    { name: 'AUTHENTICITY', path: '/authenticity' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;


return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900 border-b border-white/10 shadow-md">
    {/* ^^^ Removed /95 and backdrop-blur-sm — now fully opaque dark */}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 lg:h-20">
        {/* Logo - unchanged */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shadow-lg transform group-hover:scale-110 transition-all duration-300">
    <img 
      src="/logo.png"           // ← put your logo in public/ folder
      alt="Bull Pharma Logo"
      className="w-full h-full object-cover"
    />
  </div>

  <span className="text-white font-display text-lg sm:text-xl font-bold tracking-wider">
    BULL PHARMA
  </span>
</Link>

        {/* Desktop Navigation - slight contrast bump on inactive */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 text-sm font-body font-semibold tracking-wide transition-all duration-300 relative group ${
                isActive(item.path)
                  ? 'text-teal-400'
                  : 'text-white/95 hover:text-white'   // ↑ bumped from /80 to /95 for better visibility
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform origin-left transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile button - unchanged */}
    <button
  onClick={() => setIsOpen(!isOpen)}
  className="lg:hidden text-white p-2 rounded-md hover:bg-teal-600/30 active:bg-teal-600/50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-navy-900"
  aria-label="Toggle menu"
>
  <svg
    className="w-8 h-8"               // ← bigger icon (was w-6 h-6)
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2.5"                // ← thicker lines
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
</button>
      </div>

      {/* Mobile menu - slight contrast bump */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-2 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 text-sm font-body font-semibold tracking-wide rounded-md transition-all duration-300 ${
                isActive(item.path)
                  ? 'bg-teal-500/20 text-teal-400 border-l-4 border-teal-400'
                  : 'text-white/95 hover:bg-white/10 hover:text-white border-l-4 border-transparent'  // ↑ /95 + hover /10
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </nav>
);
};

export default Navbar;
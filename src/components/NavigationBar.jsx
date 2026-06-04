import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { MdDarkMode, MdLightMode, MdDashboard, MdAddCircle, MdPerson } from 'react-icons/md';

function NavigationBar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <MdDashboard className="text-2xl" /> },
    { name: 'Add Sub', path: '/add-subscription', icon: <MdAddCircle className="text-2xl" /> },
    { name: 'User', path: '/user', icon: <MdPerson className="text-2xl" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-secondary md:top-0 md:bottom-auto md:h-16 flex items-center justify-between px-6 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-md z-50 transition-colors duration-300">
      {/* Desktop Logo */}
      <div className="hidden md:block text-2xl font-bold text-primary">
        Finance Tracker
      </div>

      {/* Nav Links */}
      <div className="flex w-full md:w-auto justify-around md:justify-end md:gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex flex-col md:flex-row items-center p-2 rounded-xl transition-all ${
              location.pathname === link.path ? 'text-pink-500 font-bold' : 'text-primary hover:text-pink-400'
            }`}
          >
            {link.icon}
            <span className="text-xs font-semibold md:hidden mt-1">{link.name}</span>
            <span className="hidden md:block font-semibold ml-2">{link.name}</span>
          </Link>
        ))}

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex flex-col md:flex-row items-center p-2 rounded-xl text-primary hover:text-pink-400 transition-transform hover:scale-105"
          aria-label="Toggle Theme"
        >
          {darkMode ? <MdLightMode className="text-2xl text-yellow-400" /> : <MdDarkMode className="text-2xl text-slate-800" />}
          <span className="text-xs font-semibold md:hidden mt-1">Theme</span>
          <span className="hidden md:block font-semibold ml-2">Theme</span>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;

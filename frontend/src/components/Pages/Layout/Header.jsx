import React, { useState, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import LoginContext from '../../../contexts/LoginContext';
import Dropdown from './Dropdown';
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { loggedin } = useContext(LoginContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (event, path) => {
    event.preventDefault();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const links = [
    { path: '/', name: 'Home' },
    { path: '/videos', name: 'Videos' },
    { path: '/books', name: 'Books' },
    { path: '/courses', name: 'Courses' },
    { path: '/roadmap', name: 'Roadmap' },
    { path: '/reviews', name: 'Reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark-teal text-peach">
      <nav className="px-4 lg:px-6 py-2.5 mx-auto max-w-screen-xl flex justify-between items-center">
        <NavLink to="/" onClick={(event) => handleClick(event, "/")} className="flex items-center">
          <img src="https://img.freepik.com/premium-vector/stock-market-icon-logo-element-illustration-stock-market-symbol-design-from-2-colored-collection-simple-stock-market-concept-can-be-used-web-mobile_159242-5117.jpg?w=740" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="text-xl font-semibold">Ｍａｒｋｅｔ Ｍｉｎｄｓ</span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:space-x-4">
          {links.map(({ path, name }) => (
            <NavLink
              key={path}
              to={path}
              onClick={(event) => handleClick(event, path)}
              className={({ isActive }) =>
                `font-medium rounded-lg text-sm px-4 py-2 hover:bg-pastel-green hover:text-deep-teal focus:outline-none ${isActive ? "underline" : ""}`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

          {/* Drodown */}
          <Dropdown/>

        {/* User Actions */}
        <div className="flex items-center lg:order-2">
          {!loggedin ? (
            <>
              <NavLink to="/login" onClick={(event) => handleClick(event, "/login")} className={({ isActive }) => `bg-primary-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-pastel-green hover:text-deep-teal focus:outline-none ${isActive ? "underline" : ""}`}>
                Log in
              </NavLink>
              <NavLink to="/signup" onClick={(event) => handleClick(event, "/signup")} className={({ isActive }) => `bg-primary-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-pastel-green hover:text-deep-teal focus:outline-none ${isActive ? "underline" : ""}`}>
                Sign up
              </NavLink>
            </>
          ) : (
            <NavLink to="/logout" onClick={(event) => handleClick(event, "/logout")} className={({ isActive }) => `bg-primary-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-pastel-green hover:text-deep-teal focus:outline-none ${isActive ? "underline" : ""}`}>
              Log out
            </NavLink>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
            <svg className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['/', '/videos', '/books', '/courses', '/roadmap', '/reviews'].map(path => (
            <NavLink
              key={path}
              to={path}
              onClick={(event) => handleClick(event, path)}
              className={({ isActive }) => `bg-primary-700 font-medium rounded-lg text-sm px-4 py-2 hover:bg-pastel-green hover:text-deep-teal focus:outline-none ${isActive ? "underline" : ""}`}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

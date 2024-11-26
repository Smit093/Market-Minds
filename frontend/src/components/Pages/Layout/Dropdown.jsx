import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Explore More');

  const links = [
    { path: '/mutual-funds', name: 'Mutual Funds' },
    { path: '/ipo', name: 'IPOs' },
    { path: '/trading', name: 'Trading' },
    { path: '/paper-trading', name: 'Paper Trading' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left ml-10">
      <div>
        <button
          onClick={toggleDropdown}
          className={`flex items-center font-medium rounded-lg text-sm px-4 py-2 hover:bg-pastel-green hover:text-deep-teal focus:outline-none`}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {selectedOption}
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.439l3.71-3.23a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-dark-teal  ">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleOptionClick(link)}
                className="block w-full text-left px-4 py-2 text-sm text-peach hover:bg-pastel-green hover:text-deep-teal rounded-lg"
                role="menuitem"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

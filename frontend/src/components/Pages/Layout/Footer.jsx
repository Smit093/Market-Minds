import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-5 text-center font-poppins">
      <div className="flex flex-col items-center">
        <p className="m-0">&copy; {new Date().getFullYear()} <i>Market Minds</i>. All rights reserved.</p>
        <div className="mt-2 flex gap-4">
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white text-2xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/justsmittt/?next=%2F" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white text-2xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="https://x.com/justsmittt" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white text-2xl hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/smitpatel093/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white text-2xl hover:text-gray-300">
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Smit093" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white text-2xl hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};


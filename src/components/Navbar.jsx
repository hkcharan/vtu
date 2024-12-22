import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="px-20 mx-auto flex items-center justify-between">
        
        <div className="text-3xl font-bold">VTU</div>

        <ul className="flex space-x-6 text-xl">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#account" className="hover:text-gray-300">
              Account
            </a>
          </li>
          <li>
            <a href="#notifications" className="hover:text-gray-300">
              Notifications
            </a>
          </li>
        </ul>

        <a href='/login' className="bg-blue-600 px-10 py-2 rounded hover:bg-blue-500 text-xl">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

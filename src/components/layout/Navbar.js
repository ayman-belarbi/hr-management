import React from 'react';
import logo from '../assets/images/logo.png'; 

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/60 shadow-md py-4 px-8 flex justify-between items-center rounded-b-xl border-b border-gray-200">
      <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />

      <h1 className="text-xl font-semibold text-blue-600 text-center">
        Système de Gestion des Ressources Humaines
      </h1>

      <span className="text-gray-700 font-medium"></span>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTachometerAlt, FaCalendarAlt, FaExclamationCircle, FaBriefcase, FaBars
} from 'react-icons/fa';

const navItems = [
  { name: 'Tableau de Bord', icon: <FaTachometerAlt />, path: '/' },
  { name: 'Demande de Congé', icon: <FaCalendarAlt />, path: '/leave-request' },
  { name: 'Suivi des Absences', icon: <FaExclamationCircle />, path: '/absence-follow' },
  { name: 'Réclamations', icon: <FaExclamationCircle />, path: '/complaint' },
  { name: 'Parcours Professionnel', icon: <FaBriefcase />, path: '/career-path' },
];

const SidebarEmployee = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside className={`bg-gradient-to-r from-blue-900 to-blue-600 text-white p-4 transition-all duration-300 
      ${isCollapsed ? 'w-16' : 'w-64'} h-screen shadow-[0_0_10px_rgba(0,112,192,0.5)]`}>
      {/* Toggle Button (Visible on Mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-white hover:text-gray-200 transition-transform transform hover:scale-110 p-2"
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Logo/Title */}
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
        Portail Employé
      </h2>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-2 py-2 md:px-4 md:py-3 rounded-lg transition-all duration-300 
                ${isActive 
                  ? 'bg-blue-700 text-white shadow-[0_0_8px_rgba(0,191,255,0.7)]' 
                  : 'text-gray-200 hover:bg-blue-500/50 hover:shadow-[0_0_6px_rgba(0,112,192,0.5)]'
                }`}
            >
              <span className="text-lg md:text-xl transition-transform hover:scale-110">
                {React.cloneElement(item.icon, {
                  className: `w-5 h-5 ${isActive ? 'text-white' : 'text-gray-300'}`,
                })}
              </span>
              {!isCollapsed && (
                <span className="text-sm md:text-base font-medium hidden md:inline transition-opacity opacity-100 hover:opacity-90">
                  {item.name}
                </span>
              )}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 ease-in-out hover:w-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default SidebarEmployee;
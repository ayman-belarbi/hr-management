import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Make sure this path is correct

const Welcome = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950"></div>

      {/* Floating glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-600 filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-700 filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-blue-500 filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Top glowing bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600"></div>

      {/* Futuristic floating element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-blue-500/30 rounded-full flex items-center justify-center animate-pulse-slow">
          <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-cyan-400/40 rounded-full animate-spin-slow transform rotate-45">
            <div className="w-full h-full border-2 border-dashed border-blue-400 rounded-full animate-ping-slow"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo + Title */}
        <div className="mb-4 transform transition-all duration-700 hover:scale-105">
          <img 
            src={logo} 
            alt="GRH Logo" 
            className="h-12 w-auto mx-auto mb-2 drop-shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            GRH System
          </h1>
          <p className="text-sm md:text-base text-blue-200 mt-2 max-w-xs mx-auto">
            Gestion des Ressources Humaines du futur.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          to="/login"
          className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-md"></span>
          <span className="relative z-10">Se connecter</span>
        </Link>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-blue-500/60">
        © {new Date().getFullYear()} GRH System. Tous droits réservés.
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(30px, -50px) scale(1.1); }
          66%  { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes ping {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-ping-slow {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
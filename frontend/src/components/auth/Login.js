import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ role, onBack, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');

    // Validate inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer un email valide.');
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Update user state for App.js
      setUser({
        isAuthenticated: true,
        role: role.toLowerCase(),
        name: email.split('@')[0],
      });

      // Set success message
      setSuccess(`Connexion réussie en tant que ${role} ! Redirection...`);

      // Redirect based on role
      setTimeout(() => {
        navigate(`/${role.toLowerCase()}/dashboard`);
      }, 1000);

      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto transition-all duration-300">
      {/* Role Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Connexion en tant que <span className="capitalize">{role}</span>
        </h2>
        <p className="text-gray-600 mt-1">Veuillez entrer vos identifiants</p>
      </div>

      {/* Messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm">
          {success}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
            placeholder="example@domain.com"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 bg-white/70 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
            placeholder="••••••••"
          />
        </div>

        {/* Remember Me */}
        <div>
          <label className="flex items-center text-sm text-gray-700">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              disabled={isLoading}
            />
            <span className="ml-2">Se souvenir de moi</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-[1.02] focus:outline-none ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Connexion...
            </span>
          ) : (
            'Se connecter'
          )}
        </button>
      </form>

      {/* Back to Roles */}
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onBack}
          disabled={isLoading}
          className="text-sm text-blue-600 hover:underline flex items-center justify-center disabled:opacity-50"
        >
          ← Retour aux rôles
        </button>
      </div>
    </div>
  );
};

// Main Login Component
const Login = ({ setUser }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleBack = () => {
    setSelectedRole(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 p-4 transition-all duration-500 ease-in-out">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505740453200-3f12e467f286')] bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {selectedRole ? (
          // Show Form
          <LoginForm role={selectedRole} onBack={handleBack} setUser={setUser} />
        ) : (
          // Show Role Cards
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="p-8 text-center border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800">Connexion</h2>
              <p className="text-gray-600 mt-2">Choisissez votre rôle pour vous connecter</p>
            </div>

            {/* Role Options */}
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Admin Card */}
              <div
                onClick={() => handleRoleSelect('Admin')}
                className="group bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Administrateur</h3>
                <p className="text-white/80 text-sm mt-1 text-center">Gestion complète du système</p>
              </div>

              {/* RH Card */}
              <div
                onClick={() => handleRoleSelect('RH')}
                className="group bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl p-6 text-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.196M22 9H12l4 4 4-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Responsable RH</h3>
                <p className="text-white/80 text-sm mt-1 text-center">Gestion des employés et documents</p>
              </div>

              {/* Employee Card */}
              <div
                onClick={() => handleRoleSelect('Employee')}
                className="group bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Employé</h3>
                <p className="text-white/80 text-sm mt-1 text-center">Suivi de carrière et demandes</p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="px-8 py-4 text-center text-sm text-gray-500 border-t border-gray-200">
              <p>© {new Date().getFullYear()} GRH System. Tous droits réservés.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
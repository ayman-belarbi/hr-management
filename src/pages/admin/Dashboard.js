// admin/Dashboard.jsx
import React, { useState } from 'react';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Dashboard Admin</h1>
      <p className="mt-4 text-gray-700">
        Bienvenue dans le tableau de bord de l'administration. Voici un aperçu rapide des statistiques.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex items-center">
        <input
          type="text"
          placeholder="Rechercher un employé..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Statistique des employés */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-500">Statistiques des Employés</h2>
          <p className="mt-2 text-gray-700">Détails sur les employés actifs et inactifs.</p>
          {/* Example chart or dynamic content */}
          <div className="mt-4">
            <p className="font-semibold">Total Employés: 120</p>
            <p>Actifs: 100 | Inactifs: 20</p>
          </div>
        </div>

        {/* Demandé de congé */}
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-green-500">Demandes de Congé</h2>
          <p className="mt-2 text-gray-700">Total des demandes de congé en attente.</p>
          <div className="mt-4">
            <p className="font-semibold">Demandes en Attente: 5</p>
          </div>
        </div>

        {/* Réclamations */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-yellow-500">Réclamations</h2>
          <p className="mt-2 text-gray-700">Nombre de réclamations récentes.</p>
          <div className="mt-4">
            <p className="font-semibold">Réclamations Récentes: 3</p>
          </div>
        </div>
      </div>

      {/* Recent Employee Data */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Liste des Employés</h2>
        <table className="min-w-full mt-4 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Poste</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Example static data, can be dynamic */}
            {['John Doe', 'Jane Smith', 'Alice Johnson'].map((name, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">example@mail.com</td>
                <td className="px-6 py-4 text-sm text-gray-500">Developer</td>
                <td className="px-6 py-4 text-sm text-gray-500">Actif</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

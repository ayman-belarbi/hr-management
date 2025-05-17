import React, { useState } from 'react';

const DashboardEmployee = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sample data for the employee
  const employeeData = {
    name: 'Ahmed El Hachimi',
    leaveBalance: 15, // Days remaining
    pendingRequests: 2,
    recentComplaints: 1,
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Tableau de Bord Employé</h1>
      <p className="mt-4 text-gray-700">
        Bienvenue, {employeeData.name}. Consultez vos informations personnelles, vos congés et vos réclamations ici.
      </p>

      {/* Search Bar */}
      <div className="mt-6 flex items-center">
        <input
          type="text"
          placeholder="Rechercher dans vos données..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Solde de Congés */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-blue-500">Solde de Congés</h2>
          <p className="mt-2 text-gray-700">Jours de congé restants pour cette année.</p>
          <div className="mt-4">
            <p className="font-semibold">Jours Restants: {employeeData.leaveBalance}</p>
          </div>
        </div>

        {/* Demandes en Attente */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-yellow-500">Demandes en Attente</h2>
          <p className="mt-2 text-gray-700">Demandes de congé ou justificatifs en attente.</p>
          <div className="mt-4">
            <p className="font-semibold">En Attente: {employeeData.pendingRequests}</p>
          </div>
        </div>

        {/* Réclamations Récentes */}
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl text-red-500">Réclamations Récentes</h2>
          <p className="mt-2 text-gray-700">Nombre de réclamations soumises récemment.</p>
          <div className="mt-4">
            <p className="font-semibold">Réclamations: {employeeData.recentComplaints}</p>
          </div>
        </div>
      </div>

      {/* Résumé des Activités */}
      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Résumé des Activités</h2>
        <table className="min-w-full mt-4 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Activité</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Demande de Congé</td>
              <td className="px-6 py-4 text-sm text-gray-500">01/05/2025</td>
              <td className="px-6 py-4 text-sm text-gray-500">En attente</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Justificatif d'Absence</td>
              <td className="px-6 py-4 text-sm text-gray-500">12/04/2025</td>
              <td className="px-6 py-4 text-sm text-gray-500">Approuvé</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardEmployee;
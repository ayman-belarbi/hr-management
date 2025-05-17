import React, { useState } from 'react';

const LeaveRequestsRH = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, nom: 'John Doe', poste: 'Développeur', dateDebut: '2025-05-01', dateFin: '2025-05-07', statut: 'En attente' },
    { id: 2, nom: 'Jane Smith', poste: 'Designer', dateDebut: '2025-05-10', dateFin: '2025-05-14', statut: 'En attente' },
  ]);

  const [message, setMessage] = useState(null);

  const handleApprove = (id) => {
    setLeaveRequests(leaveRequests.map(request =>
      request.id === id ? { ...request, statut: 'Approuvé' } : request
    ));
    setMessage({ type: 'success', text: 'Demande approuvée avec succès !' });
  };

  const handleReject = (id) => {
    setLeaveRequests(leaveRequests.map(request =>
      request.id === id ? { ...request, statut: 'Refusé' } : request
    ));
    setMessage({ type: 'error', text: 'Demande refusée.' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-12">
        Gestion des Congés
      </h1>

      {message && (
        <div className={`mb-8 p-4 rounded-lg shadow-md flex items-center space-x-3 ${message.type === 'success' 
          ? 'bg-green-50 text-green-700' 
          : 'bg-red-50 text-red-700'}`}>
          <span className={`w-5 h-5 ${message.type === 'success' 
            ? 'bg-green-300' 
            : 'bg-red-300'} rounded-full`}></span>
          <span>{message.text}</span>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employé
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Poste
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Période
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaveRequests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {request.nom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  {request.poste}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(request.dateDebut).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{new Date(request.dateFin).toLocaleDateString()}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium 
                    ${request.statut === 'En attente' && 'bg-yellow-100 text-yellow-800'}
                    ${request.statut === 'Approuvé' && 'bg-green-100 text-green-800'}
                    ${request.statut === 'Refusé' && 'bg-red-100 text-red-800'}`}>
                    {request.statut}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-4">
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="px-5 py-2 bg-green-500 text-white rounded-full 
                    hover:bg-green-600 transition-all shadow-sm disabled:opacity-50"
                    disabled={['Approuvé', 'Refusé'].includes(request.statut)}
                  >
                    Approuver
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="px-5 py-2 bg-red-500 text-white rounded-full 
                    hover:bg-red-600 transition-all shadow-sm disabled:opacity-50"
                    disabled={['Approuvé', 'Refusé'].includes(request.statut)}
                  >
                    Refuser
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestsRH;
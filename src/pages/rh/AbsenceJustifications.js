import React, { useState } from 'react';

const AbsenceJustificationsRH = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, nom: 'Ahmed El Hachimi', dateAbsence: '12/04/2025', justificatif: 'maladie.pdf', statut: 'Approuvé' },
    { id: 2, nom: 'Sara Nadir', dateAbsence: '25/06/2025', justificatif: 'urgence_familiale.pdf', statut: 'En Attente' },
  ]);

  // Fonction pour approuver ou refuser une demande
  const handleStatusChange = (id, newStatus) => {
    const updatedRequests = leaveRequests.map(request => 
      request.id === id ? { ...request, statut: newStatus } : request
    );
    setLeaveRequests(updatedRequests);
    console.log(`Demande avec ID ${id} ${newStatus === 'Approuvé' ? 'approuvée' : 'refusée'}`);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Justificatifs d'Absence</h1>
      <p className="text-lg text-gray-700">Gérez les justificatifs d'absence des employés ici.</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600">Liste des Justificatifs</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Nom</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Date d'Absence</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Justificatif</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Statut</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td className="border-b border-gray-200 px-4 py-2">{request.nom}</td>
                <td className="border-b border-gray-200 px-4 py-2">{request.dateAbsence}</td>
                <td className="border-b border-gray-200 px-4 py-2">
                  <a
                    href={`/uploads/${request.justificatif}`}  // Assure-toi que ce lien fonctionne et pointe vers ton répertoire de fichiers
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Voir le justificatif
                  </a>
                </td>
                <td className="border-b border-gray-200 px-4 py-2">{request.statut}</td>
                <td className="border-b border-gray-200 px-4 py-2">
                  {request.statut === 'En Attente' ? (
                    <>
                      <button
                        onClick={() => handleStatusChange(request.id, 'Approuvé')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
                      >
                        Approuver
                      </button>
                      <button
                        onClick={() => handleStatusChange(request.id, 'Refusé')}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Refuser
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">Aucune action</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AbsenceJustificationsRH;

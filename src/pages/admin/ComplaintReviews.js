import React, { useState } from 'react';

const ComplaintReviews = () => {
  const [complaints, setComplaints] = useState([
    { id: 1, employeeName: 'Yassine Belkheir', complaint: 'Mauvaise gestion du temps', status: 'En cours' },
    { id: 2, employeeName: 'Laila Saadi', complaint: 'Problèmes de communication', status: 'Résolu' },
    { id: 3, employeeName: 'Ahmed El Hachimi', complaint: 'Conditions de travail difficiles', status: 'En cours' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setComplaints(prevComplaints =>
      prevComplaints.map(complaint =>
        complaint.id === id ? { ...complaint, status: newStatus } : complaint
      )
    );
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Réclamations</h1>
      <p className="text-lg text-gray-700">Examinez et gérez les réclamations des employés.</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600">Liste des Réclamations</h2>
        <div className="mt-4">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Nom de l'Employé</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Réclamation</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Statut</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td className="border-b border-gray-200 px-4 py-2">{complaint.employeeName}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{complaint.complaint}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{complaint.status}</td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    <button
                      onClick={() => handleStatusChange(complaint.id, 'Résolu')}
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Résoudre
                    </button>
                    <button
                      onClick={() => handleStatusChange(complaint.id, 'Rejeté')}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Rejeter
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintReviews;

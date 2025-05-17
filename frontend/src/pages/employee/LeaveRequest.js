import React, { useState } from 'react';

const LeaveRequestEmployee = () => {
  const [formData, setFormData] = useState({
    dateDebut: '',
    dateFin: '',
    raison: '',
  });

  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, dateDebut: '2025-05-01', dateFin: '2025-05-07', raison: 'Vacances', statut: 'En attente' },
    { id: 2, dateDebut: '2025-06-10', dateFin: '2025-06-14', raison: 'Personnel', statut: 'Approuvé' },
  ]);

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    setMessage('Demande soumise avec succès!');
    setFormData({ dateDebut: '', dateFin: '', raison: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">Demande de Congé</h1>
      <p className="mt-4 text-gray-700">Soumettez votre demande de congé ici.</p>

      <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Date de Début</label>
            <input
              type="date"
              name="dateDebut"
              value={formData.dateDebut}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Date de Fin</label>
            <input
              type="date"
              name="dateFin"
              value={formData.dateFin}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700">Raison</label>
          <textarea
            name="raison"
            value={formData.raison}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            placeholder="Entrez la raison de votre congé"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          Soumettre
        </button>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </form>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Historique des Demandes</h2>
        <table className="min-w-full mt-4 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Début</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Fin</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Raison</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leaveRequests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{request.dateDebut}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{request.dateFin}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{request.raison}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{request.statut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveRequestEmployee;
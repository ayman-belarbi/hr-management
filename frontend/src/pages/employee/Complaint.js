import React, { useState } from 'react';

const ComplaintEmployee = () => {
  const [complaints, setComplaints] = useState([
    { id: 1, complaint: 'Mauvaise gestion du temps', status: 'En cours', date: '01/05/2025' },
    { id: 2, complaint: 'Problèmes de communication', status: 'Résolu', date: '15/04/2025' },
  ]);

  const [formData, setFormData] = useState({
    complaint: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, complaint: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.complaint) {
      setMessage({ type: 'error', text: 'Veuillez entrer une réclamation.' });
      return;
    }

    const newComplaint = {
      id: Date.now(),
      complaint: formData.complaint,
      status: 'En cours',
      date: new Date().toLocaleDateString(),
    };

    setComplaints([...complaints, newComplaint]);
    setMessage({ type: 'success', text: 'Réclamation soumise avec succès !' });
    setFormData({ complaint: '' });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Réclamations</h1>
      <p className="text-lg text-gray-700">Soumettez et consultez vos réclamations ici.</p>

      {message && (
        <div
          className={`mb-8 p-4 rounded-lg shadow-md flex items-center space-x-3 ${
            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          <span
            className={`w-5 h-5 ${message.type === 'success' ? 'bg-green-300' : 'bg-red-300'} rounded-full`}
          ></span>
          <span>{message.text}</span>
        </div>
      )}

      {/* Form for submitting complaints */}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">Réclamation</label>
          <textarea
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Décrivez votre réclamation"
            required
          ></textarea>
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="px-10 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md"
          >
            Soumettre
          </button>
        </div>
      </form>

      {/* Table for viewing complaints */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600">Historique des Réclamations</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Réclamation</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Date</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Statut</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td className="border-b border-gray-200 px-4 py-2">{complaint.complaint}</td>
                <td className="border-b border-gray-200 px-4 py-2">{complaint.date}</td>
                <td className="border-b border-gray-200 px-4 py-2">{complaint.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintEmployee;
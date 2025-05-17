import React, { useState } from 'react';

const AbsenceFollowEmployee = () => {
  const [justifications, setJustifications] = useState([
    { id: 1, dateAbsence: '12/04/2025', justificatif: 'maladie.pdf', statut: 'Approuvé' },
    { id: 2, dateAbsence: '25/06/2025', justificatif: 'urgence_familiale.pdf', statut: 'En Attente' },
  ]);

  const [formData, setFormData] = useState({
    dateAbsence: '',
    justificatif: null,
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.dateAbsence || !formData.justificatif) {
      setMessage({ type: 'error', text: 'Veuillez remplir tous les champs.' });
      return;
    }

    const newJustification = {
      id: Date.now(),
      dateAbsence: formData.dateAbsence,
      justificatif: formData.justificatif.name,
      statut: 'En Attente',
    };

    setJustifications([...justifications, newJustification]);
    setMessage({ type: 'success', text: 'Justificatif soumis avec succès !' });
    setFormData({ dateAbsence: '', justificatif: null });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Suivi des Absences</h1>
      <p className="text-lg text-gray-700">Consultez et soumettez vos justificatifs d'absence ici.</p>

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

      {/* Form for submitting justifications */}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Date d'Absence</label>
            <input
              type="date"
              name="dateAbsence"
              value={formData.dateAbsence}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Justificatif (PDF)</label>
            <input
              type="file"
              name="justificatif"
              accept=".pdf"
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
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

      {/* Table for viewing justifications */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600">Liste des Justificatifs</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Date d'Absence</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Justificatif</th>
              <th className="border-b border-gray-200 px-4 py-2 text-left">Statut</th>
            </tr>
          </thead>
          <tbody>
            {justifications.map((justification) => (
              <tr key={justification.id}>
                <td className="border-b border-gray-200 px-4 py-2">{justification.dateAbsence}</td>
                <td className="border-b border-gray-200 px-4 py-2">
                  <a
                    href={`/uploads/${justification.justificatif}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Voir le justificatif
                  </a>
                </td>
                <td className="border-b border-gray-200 px-4 py-2">{justification.statut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AbsenceFollowEmployee;
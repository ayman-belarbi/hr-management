import React, { useState } from 'react';

const CareerPathEmployee = () => {
  const [careerHistory] = useState({
    id: 3,
    nom: 'Ahmed El Hachimi',
    poste: 'Analyste de données',
    datePromotion: '20/08/2020',
    historiquePostes: [
      { poste: 'Stagiaire', date: '01/06/2018', action: 'Embauche' },
      { poste: 'Analyste Junior', date: '20/08 healed/2020', action: 'Promotion' },
    ],
    historiqueGrades: [
      { grade: 'Grade 1', date: '01/01/2019', action: 'Avancement' },
      { grade: 'Grade 2', date: '20/08/2020', action: 'Avancement' },
    ],
  });

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Parcours Professionnel</h1>
      <p className="text-lg text-gray-700">Consultez l'historique de votre carrière ici.</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-600">Votre Parcours</h2>
        <div className="mt-4">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Nom</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Poste Actuel</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Date de Promotion</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Historique des Postes</th>
                <th className="border-b border-gray-200 px-4 py-2 text-left">Historique des Grades</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-200 px-4 py-2">{careerHistory.nom}</td>
                <td className="border-b border-gray-200 px-4 py-2">{careerHistory.poste}</td>
                <td className="border-b border-gray-200 px-4 py-2">{careerHistory.datePromotion}</td>
                <td className="border-b border-gray-200 px-4 py-2">
                  <ul>
                    {careerHistory.historiquePostes.map((history, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {history.poste} - {history.date} ({history.action})
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border-b border-gray-200 px-4 py-2">
                  <ul>
                    {careerHistory.historiqueGrades.map((grade, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {grade.grade} - {grade.date} ({grade.action})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CareerPathEmployee;
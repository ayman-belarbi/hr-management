import React, { useState } from 'react';

const CareerManagementRH = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [careerHistory, setCareerHistory] = useState([
    {
      id: 1,
      nom: 'Yassine Belkheir',
      poste: 'Développeur Senior',
      datePromotion: '01/01/2023',
      historiquePostes: [
        { poste: 'Développeur Junior', date: '01/01/2020', action: 'Promotion' },
        { poste: 'Développeur', date: '01/01/2021', action: 'Promotion' },
      ],
      historiqueGrades: [
        { grade: 'Grade 2', date: '01/01/2021', action: 'Avancement' },
        { grade: 'Grade 3', date: '01/01/2023', action: 'Avancement' },
      ],
    },
    {
      id: 2,
      nom: 'Laila Saadi',
      poste: 'Responsable Marketing',
      datePromotion: '15/06/2021',
      historiquePostes: [
        { poste: 'Assistante Marketing', date: '01/05/2019', action: 'Promotion' },
        { poste: 'Responsable Marketing', date: '15/06/2021', action: 'Promotion' },
      ],
      historiqueGrades: [
        { grade: 'Grade 1', date: '01/06/2020', action: 'Avancement' },
        { grade: 'Grade 2', date: '15/06/2021', action: 'Avancement' },
      ],
    },
    {
      id: 3,
      nom: 'Ahmed El Hachimi',
      poste: 'Analyste de données',
      datePromotion: '20/08/2020',
      historiquePostes: [
        { poste: 'Stagiaire', date: '01/06/2018', action: 'Embauche' },
        { poste: 'Analyste Junior', date: '20/08/2020', action: 'Promotion' },
      ],
      historiqueGrades: [
        { grade: 'Grade 1', date: '01/01/2019', action: 'Avancement' },
        { grade: 'Grade 2', date: '20/08/2020', action: 'Avancement' },
      ],
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCareerHistory = careerHistory.filter((employee) =>
    employee.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Gestion de Carrière</h1>
      <p className="text-lg text-gray-700">Gérez les carrières des employés ici, y compris les promotions et les évaluations de performance.</p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Rechercher un employé"
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <h2 className="text-xl font-semibold text-blue-600">Historique des Carrières</h2>
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
              {filteredCareerHistory.map((employee) => (
                <tr key={employee.id}>
                  <td className="border-b border-gray-200 px-4 py-2">{employee.nom}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{employee.poste}</td>
                  <td className="border-b border-gray-200 px-4 py-2">{employee.datePromotion}</td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    <ul>
                      {employee.historiquePostes.map((history, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {history.poste} - {history.date} ({history.action})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-2">
                    <ul>
                      {employee.historiqueGrades.map((grade, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {grade.grade} - {grade.date} ({grade.action})
                        </li>
                      ))}
                    </ul>
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

export default CareerManagementRH;

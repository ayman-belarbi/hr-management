import React, { useState } from 'react';

const ManageRh = () => {
  const [formData, setFormData] = useState({
    id: null,
    nom: '',
    prenom: '',
    email: '',
    mot_de_passe: '',
    genre: '',
    grade: '',
    poste_actuel: '',
    date_recrutement: '',
  });

  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom || !formData.prenom || !formData.email || !formData.mot_de_passe) {
      setMessage({ type: 'error', text: 'Tous les champs sont obligatoires.' });
      return;
    }

    if (isEditing) {
      setEmployees(employees.map(emp => 
        emp.id === formData.id ? { ...formData } : emp
      ));
      setIsEditing(false);
    } else {
      setEmployees([...employees, { ...formData, id: Date.now() }]);
    }

    setMessage({ type: 'success', text: isEditing ? 'RH modifiée avec succès !' : 'RH ajoutée avec succès !' });
    setFormData({
      id: null,
      nom: '',
      prenom: '',
      email: '',
      mot_de_passe: '',
      genre: '',
      grade: '',
      poste_actuel: '',
      date_recrutement: '',
    });
  };

  const handleEdit = (id) => {
    const employeeToEdit = employees.find(emp => emp.id === id);
    setFormData(employeeToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
    setMessage({ type: 'success', text: 'Employé supprimé avec succès !' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        Gestion des RH
      </h1>

      {message && (
        <div className={`mb-6 p-4 rounded-lg shadow-md ${message.type === 'success' 
          ? 'bg-green-50 text-green-700' 
          : 'bg-red-50 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <InputField 
              label="Nom" 
              name="nom" 
              value={formData.nom} 
              onChange={handleChange} 
              required 
            />
            
            <InputField 
              label="Prénom" 
              name="prenom" 
              value={formData.prenom} 
              onChange={handleChange} 
              required 
            />
            
            <InputField 
              label="Email" 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            
            <InputField 
              label="Mot de passe" 
              type="password" 
              name="mot_de_passe" 
              value={formData.mot_de_passe} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="space-y-6">
            <SelectField 
              label="Grade" 
              name="grade" 
              value={formData.grade} 
              onChange={handleChange}
              options={[
                { value: '', label: 'Sélectionnez un grade' },
                ...Array.from({ length: 6 }, (_, i) => ({
                  value: i + 1,
                  label: `Grade ${i + 1}`
                }))
              ]}
            />
            
            <SelectField 
              label="Poste actuel" 
              name="poste_actuel" 
              value={formData.poste_actuel} 
              onChange={handleChange}
              options={[
                { value: '', label: 'Sélectionnez un poste' },
                { value: 'A', label: 'Poste A' },
                { value: 'B', label: 'Poste B' },
                { value: 'C', label: 'Poste C' },
                { value: 'D', label: 'Poste D' },
              ]}
            />
            
            <InputField 
              label="Date de recrutement" 
              type="date" 
              name="date_recrutement" 
              value={formData.date_recrutement} 
              onChange={handleChange} 
            />
            
            <div className="flex flex-col space-y-4">
              <label className="text-lg font-medium">Genre</label>
              <div className="flex space-x-6">
                <RadioButton 
                  label="Homme" 
                  name="genre" 
                  value="Homme" 
                  checked={formData.genre === 'Homme'} 
                  onChange={handleChange} 
                />
                <RadioButton 
                  label="Femme" 
                  name="genre" 
                  value="Femme" 
                  checked={formData.genre === 'Femme'} 
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className={`px-8 py-3 rounded-full font-semibold transition-all 
              ${isEditing 
                ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500' 
                : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'}`}
          >
            {isEditing ? 'Modifier' : 'Enregistrer'}
          </button>
        </div>
      </form>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prénom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Poste
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{emp.nom}</td>
                <td className="px-6 py-4 whitespace-nowrap">{emp.prenom}</td>
                <td className="px-6 py-4 whitespace-nowrap">{emp.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{emp.poste_actuel}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-4">
                  <button
                    onClick={() => handleEdit(emp.id)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                  >
                    Supprimer
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

// Reusable Input Component
const InputField = ({ label, type = 'text', name, value, onChange, required }) => (
  <div className="flex flex-col">
    <label className="text-lg font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`px-4 py-3 border border-gray-300 rounded-lg focus:outline-none 
        focus:ring-2 focus:ring-blue-500 ${required ? 'required' : ''}`}
      placeholder={`Entrez ${label.toLowerCase()}`}
      required={required}
    />
  </div>
);

// Reusable Select Component
const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="flex flex-col">
    <label className="text-lg font-medium mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

// Reusable Radio Button Component
const RadioButton = ({ label, name, value, checked, onChange }) => (
  <label className="flex items-center space-x-2">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="focus:ring-2 focus:ring-blue-500"
    />
    <span className="text-lg">{label}</span>
  </label>
);

export default ManageRh;
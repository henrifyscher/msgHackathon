import React from 'react';
import "../styles/adminsPage.css"; 

const admins = [
  { id: 1, name: 'Ines', role: 'CEO' },
  { id: 2, name: 'Harash', role: 'COO' },
  { id: 3, name: 'Henry', role: 'CFO' },
  { id: 4, name: 'Maria', role: 'CTO' },
  { id: 5, name: 'Admin 5', role: 'CMO' },
  { id: 6, name: 'Admin 6', role: 'CIO' },
];

const AdminsPage = () => {
  return (
    <div className="admins-page">
      <h1>Meet Our Team</h1>
      <div className="admins-container">
        {admins.map((admin) => (
          <div key={admin.id} className="admin-box">
            <h2>{admin.name}</h2>
            <p>{admin.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminsPage;

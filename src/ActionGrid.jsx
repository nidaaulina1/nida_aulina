import React from 'react';

const actions = [
  { title: 'Donasi', icon: 'https://gudang-prod.kitabisa.com/images/39bf5bf1-0b8c-11ef-922c-560ba81ec564_48C0484EFE1896B7.png' },
  { title: 'Zakat', icon: 'https://gudang-prod.kitabisa.com/images/4d7eb2aa-0b8c-11ef-b5a4-9e1c359904b5_193B9D9E90ED4D73.png' },
  { title: 'Galang Dana', icon: 'https://gudang-prod.kitabisa.com/images/5ef4a61d-0b8c-11ef-a133-5e178fd37903_89746E0009E0F5AB.png' },
  { title: 'Donasi Otomatis', icon: 'https://gudang-prod.kitabisa.com/images/74f805ac-0b8c-11ef-946a-d602445454fc_75200A790DABC405.png' },
  { title: 'Voluntrip', icon: 'https://gudang-prod.kitabisa.com/images/8527a215-0b8c-11ef-8a0e-d647d7f1e3f6_9BC707BA060E004D.png' },
  { title: 'Kolaborasi CSR', icon: 'https://gudang-prod.kitabisa.com/images/dfaa07eb-02f8-11ef-8f87-d21d1fd5020d_C3AA4CB4D6F2C7.png', badge: '' },
];

function ActionsGrid() {
  return (
    
    <div className="actions-container">
      <h2 className="actions-title">Mau berbuat baik apa hari ini?</h2>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <div key={index} className="action-card">
            <img src={action.icon} alt={action.title} className="action-icon" />
            {action.badge && <span className="action-badge">{action.badge}</span>}
            <p className="action-title">{action.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActionsGrid;

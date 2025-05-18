import React from 'react';
import DropdownMenu from './DropdownMenu.js';



function Navbar() {
  const menuItems = [
    { label: 'Accueil', onClick: () => alert('Accueil') },
    { label: 'Diplômes', onClick: () => alert('Diplômes') },
    { label: 'Expériences', onClick: () => alert('Expériences') },
    { label: 'Soft skills', onClick: () => alert('Soft skills') },
  ];

  return (
<nav
  className="flex justify-between items-center p-4 bg-gray-100"
  style={{ paddingRight: '20px' }}
>
    

  <h1 className="text-3xl font-bold text-gray-900 hover:text-pink-500 transition-colors duration-300">
  Mon Portfolio
</h1>

  <div style={{ minWidth: '100px', textAlign: 'right' }}>
    <DropdownMenu label="Menu" items={menuItems} />
  </div>
</nav>
  );
}

export default Navbar;
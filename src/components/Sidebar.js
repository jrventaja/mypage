import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onOptionClick }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onOptionClick('Home')}>Home</li>
        <li onClick={() => onOptionClick('About')}>About</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

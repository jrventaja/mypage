import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <Link to="/">
          <li className="home-button">
            <span>&gt; 127.0.0.1</span><span className="blink">_</span>
          </li>
        </Link>
        <Link to="/whoami">
          <li className="whoami-button">
            <span>&gt; whoami</span><span className="blink">_</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};

export default Sidebar;

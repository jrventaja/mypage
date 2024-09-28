// src/components/Header.js
import React from "react";
import "./Header.css";
import profilePicture from "../resources/profile-picture.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>José Ventaja</h1>
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
    </header>
  );
};

export default Header;

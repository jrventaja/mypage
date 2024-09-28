import React from "react";
import "./Header.css";
import profilePicture from "../../resources/profile-picture.jpeg";
import githubLogo from "../../resources/github-logo.png"
import linkedinLogo from "../../resources/linkedin-logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ventaja/">
          <img src={linkedinLogo} alt="Linkedin" className="linkedin" />
        </a>
        <h1>/</h1>
        <a target="_blank" rel="noreferrer" href="https://github.com/jrventaja">
          <img src={githubLogo} alt="Github" className="github" />
        </a>
        <h1>/</h1>
        <h1 className="name">José Ventaja</h1>
        <img src={profilePicture} alt="Profile" className="profile-picture" />
      </div>
    </header>
  );
};

export default Header;

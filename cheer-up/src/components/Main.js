import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const MainPage = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="main-title">¿Quieres hecharte unas risas?</h1>
      </div>
      <div className="content-container">
        <p className="sub-text">Haz clic en este botón:</p>
        <Link to="/jokes" className="button">Click para un chiste</Link>
      </div>
    </div>
  );
};

export default MainPage;

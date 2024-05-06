import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

const MainPage = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="main-title">¡Suerte en tus exámenes y prácticas!</h1>
      </div>
      <div className="content-container">
        <p className="sub-text">Si te sientes agobiada, haz clic en este botón:</p>
        <Link to="/jokes" className="button">Click para un chiste</Link>
      </div>
    </div>
  );
};

export default MainPage;

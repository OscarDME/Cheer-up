import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Route
import MainPage from './components/Main';
import JokesPage from './components/Jokes';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<MainPage />} /> {/* Cambia component por element */}
        <Route path="/jokes" element={<JokesPage />} /> {/* Cambia component por element */}
      </Routes> 
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

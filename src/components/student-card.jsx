import React from 'react';
import './student-card.css';
import logo from "../assets/person.svg"
const Card = ({ user }) => {
  return (
    <div className="card-container">
      {user.image != "" ? <img src={user.image} alt={user.name} className="card-image" /> : <img src={logo} alt={user.name} className="card-image" />
      }
      <div className="card-content">
        <h2>{user.name}</h2>
        <p>{user.rollNumber}</p>
        <p>{user.gender}</p>
        <p>{user.department}</p>
      </div>
    </div>
  );
};

export default Card;

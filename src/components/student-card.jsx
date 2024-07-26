import React, { useState } from 'react';
import './student-card.css';
import logo from "../assets/person.svg"
import CardModal from './ui/card_modal';
const Card = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
   <>
    <div  onClick={()=>setIsOpen(true)}><div className="card-container">
    {user.image != "" ? <img src={user.image} alt={user.name} className="card-image" /> : <img src={logo} alt={user.name} className="card-image" />
    }
    <div className="card-content min-w-40 min-h-36">
      <h2>{user.name}</h2>
      <p>{user.rollno}</p>
      <p>{user.gender}</p>
      <p>{user.department}</p>
    </div>
  </div>
  </div>
  {isOpen && <CardModal user={user} close={()=>setIsOpen(false)}/>}
    </>
  );
};

export default Card;

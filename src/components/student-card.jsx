import React, { useState } from 'react';
import './student-card.css';
import logo from "../assets/person.svg"
import Modal from './modal';
import CustomWebcam from './webcam';

const Card = ({ user }) => {

  const [open, setOpen] = useState(false)

  const handleClose = (e) => {
    console.log(e.target.id)
    if(e.target.id === "bg")
      setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
    
    <div className="card-container" onClick={handleOpen}>
      {user.image != "" ? <img src={user.image} alt={user.name} className="card-image" /> : <img src={logo} alt={user.name} className="card-image" />
      }
      <div className="card-content">
        <h2>{user.name}</h2>
        <p>{user.rollNumber}</p>
        <p>{user.gender}</p>
        <p>{user.department}</p>
      </div>
    </div>
    <Modal isOpen={open} onClose={handleClose}>
      <CustomWebcam user={user} setOpen={setOpen}/>
    </Modal>
    </>
  );
};

export default Card;

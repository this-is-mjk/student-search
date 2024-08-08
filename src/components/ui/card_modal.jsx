/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import logo from "../../assets/person.svg";
import UserProfile from '../user_profile';

const CardModal = ({ user, close }) => {
  // Add an event listener to close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalBox = document.getElementById('modal-box');
      if (modalBox && !modalBox.contains(event.target)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close]);

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div id="modal-box" className=" shadow-lg shadow-gray-800 rounded-lg p-6 relative ">
        <div className='flex flex-col items-center justify-center gap-y-2'>
        {/* {user.image !== "" ? (
          <img src={user.image} alt={user.name} className=" h-72" />
        ) : (
          <img src={logo} alt={user.name} className="h-72" />
        )} */}
        <UserProfile user={user} logo={logo} classN={"h-72"}/>
        <p className="font-bold text-2xl text-green-600 mb-3">{user.name}</p>
        <p className=" font-light">{user.rollno}</p>
        <p className="font-light">{user.programme}, {user.department}</p>
        <p className='font-light'>{user.room.length > 0 ? user.room + ", " : ""} {user.hall}</p>
        <p className='font-light'><span className='font-medium'>BloodGroup:</span> {user.bloodGroup}</p>
        <a href={`mailto:${user.email}`} className='text-blue-500 font-light'>{user.email}</a>
        <div className="more-data">
          <div>
            {/* <p>{user.room.length > 0 ? user.room + ", " : ""} {user.hall}</p> */}
          </div>
          <div>
            {/* <p>{user.bloodGroup}</p> */}
          </div>
          {user.email.length > 0 ? (
            <div>
              <p>
                {/* <a href={`mailto:${user.email}@iitk.ac.in`}>{user.email}@iitk.ac.in</a> */}
              </p>
            </div>
          ) : (
            ""
          )}
          {/* <a href={`https://home.iitk.ac.in/~${user.email}`} target="_blank" rel="noopener noreferrer">
            <button style={{ flexDirection: "column" }}>
              <br />
              <div>Visit Homepage</div>
            </button>
          </a> */}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

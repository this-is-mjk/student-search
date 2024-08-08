import { useEffect, useState } from "react";

const UserProfile = ({ user, logo, classN}) => {
    const [imageSrc, setImageSrc] = useState(logo); // Default to logo initially
    const [internetImage, setInternetImage] = useState(`https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${user.rollno}_0.jpg`);
  
    useEffect(() => {
      const img = new Image();
      img.src = internetImage;
        if(user.image){
            setImageSrc(user.image); 
        }else {
            img.onload = () => {
                setImageSrc(internetImage); 
              };
            img.onerror = () => {
                  setImageSrc(logo);
              };
        }
      
  
      
    }, [internetImage, user.image, logo]);
  
    return <img src={imageSrc} alt={user.name} className={classN} />;
  };
  
  export default UserProfile;
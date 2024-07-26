import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { storage, ref, uploadString, getDownloadURL, db } from "@/utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

const CustomWebcam = ({user, setOpen}) => {
    const webcamRef = useRef(null)
    const [imgSrc, setImgSrc] = useState(null)

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot()
        setImgSrc(imageSrc)
    }, [webcamRef])

    const retake = () => {
        setImgSrc(null)
    }

    const upload = async () => {
        var name = user.rollNumber
        var storageRef = ref(storage, `/images/${name}`)


        const uploadTask = await uploadString(storageRef, imgSrc, 'data_url').then((snapshot) => {
            console.log("Uploaded a base64 string")
            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                console.log("image available at ", downloadURL)
                user.image = downloadURL
                await updateDoc(doc(db, "students", user.id), {
                    image: downloadURL
                })                
                const students = JSON.parse(sessionStorage.getItem("students"))
                students.forEach((student) => {
                    if(student.rollNumber === user.rollNumber){
                        student.image = downloadURL
                    }
                })
                sessionStorage.setItem("students", JSON.stringify(students))
                setOpen(false)
            })
        })

    }
    return (
      <div className="container flex flex-col items-center justify-center">
        {imgSrc ? (
          <img src={imgSrc} alt="webcam" /> 
        ) : (
          <Webcam height={600} width={600} ref={webcamRef} />
        )}
        <div className="btn-container m-2 w-full flex items-center justify-center">
          {imgSrc ? (
            <div className="w-full flex items-center justify-evenly">
                <button onClick={retake}>Retake photo</button>
                <button onClick={upload}>Upload photo</button>
            </div>
          ) : (
            <button onClick={capture}>Capture photo</button>
          )}
        </div>
      </div>
    );
  };

export default CustomWebcam
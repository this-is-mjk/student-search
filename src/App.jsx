import "./App.css";
import Intro from "./components/intro";
import SearchBar from "./components/searchbar";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";
import { db } from "./utils/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function App() {
  const [searchTerm, setSearchTerm] = useState({ text: "", gender: [],  department: []});

  const [filteredData, setFilteredData] = useState([]);

  // fetch data from API
  const [students,setStudents] = useState([]);
//   const fetchData = async()=>{
//     if (sessionStorage.getItem('students')){
//       console.log("session")
//       const data = JSON.parse(sessionStorage.getItem('students'));
//       setStudents(data)
        
//     } else {
//       console.log("firebase")
//       await getDocs(collection(db, "students"))
//     .then((querySnapshot)=>{               
//         const newData = querySnapshot.docs
//             .map((doc) => ({...doc.data(), id:doc.id }));
//             setStudents(newData)   
//             sessionStorage.setItem('students', JSON.stringify(newData));
//           })        
//     }
   
//   }
//   useEffect(()=>{
//     fetchData()
//   },[])
//   useEffect(()=>{
//       handleSearch(searchTerm);
// }, [searchTerm, students])

  const handleSearch = (searchTerm) => {
    const filtered = students.filter((student) => {
      const nameMatch = student.name.toLowerCase().includes(searchTerm?.text.toLowerCase())
      const rollNumberMatch = student.rollNumber.toString().includes(searchTerm?.text);
      const genderMatch = searchTerm?.gender.length > 0 ? searchTerm?.gender.includes(student.gender) : true
      const departmentMatch = searchTerm?.department.length > 0 ? searchTerm?.department.includes(student.department) : true
      console.log(nameMatch, rollNumberMatch, genderMatch, departmentMatch)
      return (nameMatch || rollNumberMatch) &&  genderMatch && departmentMatch
    });
    setFilteredData(filtered);
  };
  
  return (
    
      <div className="App">
        <h1 className="green-heading">Hello Y24s!</h1>
        {/* <Intro /> */}
        {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
        {/* {students.length !== 0 ? ( <SearchPage  students={filteredData} /> ) : (
      <div>Loading...</div> 
    )} */}
      <div>Under Maintenance, See You Soon.</div>
       
      </div>
   
  );
}

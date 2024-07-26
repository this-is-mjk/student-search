import "./App.css";
import Intro from "./components/intro";
import SearchBar from "./components/searchbar";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabase";



export default function App() {
  const [searchTerm, setSearchTerm] = useState({ text: "", gender: [],  department: []});

  const [filteredData, setFilteredData] = useState([]);

  // fetch data from API
  const [students,setStudents] = useState([]);
  const fetchDataFromDB = async () => {
    const { data } = await supabase.from('students').select('*').limit(1200);
    console.log( data)
    setStudents(data)
  }
  const fetchData = async()=>{
    if (sessionStorage.getItem('students')){
      console.log("session")
      const data = JSON.parse(sessionStorage.getItem('students'));
      setStudents(data)
      
    } else {
      console.log("firebase")
      fetchDataFromDB()
      console.log("DATA: ",students)
     
    //   await getDocs(collection(db, "students"))
    // .then((querySnapshot)=>{               
    //     const newData = querySnapshot.docs
    //         .map((doc) => ({...doc.data(), id:doc.id }));
    //         setStudents(newData)   
    //         sessionStorage.setItem('students', JSON.stringify(newData));
    //       })        
    }
   
  }
  useEffect(()=>{
    fetchData()
  },[])
  useEffect(()=>{
      handleSearch(searchTerm);
}, [searchTerm, students])

  const handleSearch = (searchTerm) => {
    // console.log(students)
    const filtered = students.filter((student) => {
      const nameMatch = student.name.toLowerCase().includes(searchTerm?.text.toLowerCase())
      const rollNumberMatch = student.rollno.toString().includes(searchTerm?.text);
      const genderMatch = searchTerm?.gender.length > 0 ? searchTerm?.gender.includes(student.gender) : true
      const departmentMatch = searchTerm?.department.length > 0 ? searchTerm?.department.includes(student.department) : true
      return (nameMatch || rollNumberMatch) &&  genderMatch && departmentMatch
    });
    setFilteredData(filtered);
  };
  
  return (
    
      <div className="App">
        <h1 className="green-heading">Hello Y24s!</h1>
        <Intro />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {students.length !== 0 ? ( <SearchPage students={filteredData} /> ) : (
      <div>Loading...</div>
    )}
       
      </div>
   
  );
}

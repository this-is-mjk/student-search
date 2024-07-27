import "./App.css";
import Intro from "./components/intro";
import SearchBar from "./components/searchbar";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";



export default function App() {
  const [searchTerm, setSearchTerm] = useState({ text: "", gender: [],  department: []});

  const [filteredData, setFilteredData] = useState([]);

  // fetch data from API
  const [students,setStudents] = useState([]);
  const fetchDataFromDB = async () => {
const supabaseUrl = "https://xxnwqivqlhejfftikoki.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4bndxaXZxbGhlamZmdGlrb2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMDQyMjIsImV4cCI6MjAzNzU4MDIyMn0.cQuyqk4BW9L02d2skdQxl4mRpky9GKn5fd3QOgC3nnQ"
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data } = await supabase.from('students').select('*').limit(1300);
    console.log( data)
    sessionStorage.setItem('students', JSON.stringify(data));
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
      const genderMatch = searchTerm?.gender.length > 0 ? (searchTerm?.gender[0] === "Male" && student.hall==="HALL13" || searchTerm?.gender[0] === "Female" && student.hall==="HALL4") : true
      const departmentMatch = searchTerm?.department.length > 0 ? searchTerm?.department.includes(student.department) : true
      return (nameMatch || rollNumberMatch) &&  genderMatch && departmentMatch
    });
    setFilteredData(filtered);
  };
  
  return (
    
      <div className="App">
        <h1 className="green-heading font-serif font-bold">Hello Y24s!</h1>
        <Intro />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {students.length !== 0 ? ( <SearchPage students={filteredData} /> ) : (
      <div>Loading...</div>
    )}
       
      </div>
   
  );
}

import "./App.css";
import Intro from "./components/intro";
import SearchBar from "./components/searchbar";
import SearchPage from "./components/SearchPage";
import { useEffect, useState } from "react";


export default function App() {
  const [searchTerm, setSearchTerm] = useState({ text: "", gender: [],  department: []});

  const [filteredData, setFilteredData] = useState([]);

  // fetch data from API

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      rollNumber: "2301001",
      gender: "Male",
      department: "CSE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNumber: "2301002",
      gender: "Female",
      department: "EE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      rollNumber: "2301003",
      gender: "Male",
      department: "MTH",
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      rollNumber: "2301004",
      gender: "Female",
      department: "CE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 5,
      name: "Michael Brown",
      rollNumber: "2301005",
      gender: "Male",
      department: "CHE",
      image: "/placeholder-user.jpg",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      rollNumber: "2301006",
      gender: "Female",
      department: "ECO",
      image: "/placeholder-user.jpg",
    },
    {
      id: 7,
      name: "David Thompson",
      rollNumber: "2301007",
      gender: "Male",
      department: "MECH",
      image: "/placeholder-user.jpg",
    },
    {
      id: 8,
      name: "Jessica Anderson",
      rollNumber: "2301008",
      gender: "Female",
      department: "ES",
      image: "/placeholder-user.jpg",
    },
    {
      id: 9,
      name: "Christopher Martinez",
      rollNumber: "2301009",
      gender: "Male",
      department: "SDS",
      image: "/placeholder-user.jpg",
    },
  ]);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  const handleSearch = (searchTerm) => {
    const filtered = students.filter((student) => {
      const nameMatch = student.name.toLowerCase().includes(searchTerm?.text.toLowerCase())
      const rollNumberMatch = student.rollNumber.includes(searchTerm?.text)
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
      <Intro />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      <SearchPage students={filteredData}/>
    </div>
  );
}

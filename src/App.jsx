import "./App.css";
import Intro from "./components/intro";
import SearchBar from "./components/searchbar";
import SearchPage from "./pages/SearchPage";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState({ name: "", rollNumber: "", gender: [],  department: []});
  return (
    <div className="App">
       <h1 className="green-heading">Hello Y24s!</h1>
      <Intro />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />
      <SearchPage />
    </div>
  );
}

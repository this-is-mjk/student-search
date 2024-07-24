import { FaSearch, FaFilter } from "react-icons/fa";
import { IconButton } from "rsuite";
import { useState } from "react";
import "./searchbar.css";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState(searchTerm.gender);
  const [selectedBranch, setSelectedBranch] = useState(searchTerm.department);

  const toggleSelection = (item, type) => {
    const setter = type === 'gender' ? setSelectedGender : setSelectedBranch;
    const selected = type === 'gender' ? selectedGender : selectedBranch;

    let updatedSelection;
    if (selected.includes(item)) {
      updatedSelection = selected.filter(i => i !== item);
    } else {
      updatedSelection = [...selected, item];
    }
    setter(updatedSelection);
    setSearchTerm(searchTerm => ({ ...searchTerm, [type]: updatedSelection }));
  };
  const handleInputChange = (e) => {
    setSearchTerm({ ...searchTerm, text: e.target.value });
  };

  return (
    <>
      <label>
        <div className="outer-searchbar-box">
          <FaSearch style={{ color: "white" }} />
          <input
            className="searchbar"
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
          />
          <IconButton
            className="filter-button"
            onClick={() => setDropdown(!dropdown)}
            icon={<FaFilter />}
          />
        </div>
      </label>
      {dropdown && (
        <div id="filter-menu" className="filter-menu">
          <p>Gender</p>
          {['Male', 'Female', 'Other'].map(gender => (
            <button
              key={gender}
              className={selectedGender.includes(gender) ? 'selected menu-button' : 'not-selected menu-button'}
              onClick={() => toggleSelection(gender, 'gender')}
            >
              {gender}
            </button>
          ))}
          <p>Branch</p>
          {['Chemistry', 'Electrical Engineering', 'Materials Science and Engineering', 'Chemical Engineering', 'Mechanical Engineering', 'Economics', 'Civil Engineering', 'Physics', 'Computer Science and Engineering', 'Mathematics and Statistics', 'Biological Sciences and Bioengineering', 'Aerospace Engineering', 'Earth Science', 'Statistics and Data Science'].map(branch => (
            <button
              key={branch}
              className={selectedBranch.includes(branch) ? 'selected menu-button' : 'not-selected menu-button'}
              onClick={() => toggleSelection(branch, 'department')}
            >
              {branch}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

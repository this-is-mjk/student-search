import { FaSearch, FaFilter } from "react-icons/fa";
import { IconButton } from "rsuite";
import { useState } from "react";
import "./searchbar.css";

export default function SearchBar({searchTerm, setSearchTerm}) {
  const [dropdown, setDropdown] = useState(false);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState([]);

  const toggleSelection = (item, type) => {
    const setter = type === 'gender' ? setSelectedGender : setSelectedBranch;
    const selected = type === 'gender' ? selectedGender : selectedBranch;

    if (selected.includes(item)) {
      setter(selected.filter(i => i !== item));
    } else {
      setter([...selected, item]);
    }
  };

  return (
    <>
    <label>
      <div className="outer-searchbar-box">
        <FaSearch style={{ color: "white" }} />
        <input className="searchbar" type="text" placeholder="Search" />
          <IconButton
          className="filter-button"
          onClick={() => {
            setDropdown(!dropdown)
            document.getElementById("filter-menu").style.display = dropdown ? "none" : "block"
          }}
          icon={<FaFilter />}
        />
      </div>
    </label>
    <div id="filter-menu" className="filter-menu" style={{ display: 'none' }}>
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
        {['CSE', 'EE', 'MTH', 'CE', 'CHE', 'ECO', 'ME', 'PHY', 'BSBE'].map(branch => (
          <button
            key={branch}
            className={selectedBranch.includes(branch) ? 'selected menu-button' : 'not-srelected menu-button'}
            onClick={() => toggleSelection(branch, 'branch')}
          >
            {branch}
          </button>
        ))}
      </div>
    </>
  );
}


import { FaSearch, FaFilter } from "react-icons/fa";
import { IconButton } from "rsuite";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor
} from "@/components/ui/popover"
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
      <Popover>
        <PopoverAnchor className="outer-searchbar-box">
          <FaSearch style={{ color: "white" }} />
          <input
            className="searchbar"
            type="text"
            placeholder="Search"
            onChange={handleInputChange}
          />
            <PopoverTrigger>
              <IconButton
                className="filter-button"
                onClick={() => setDropdown(!dropdown)}
                icon={<FaFilter />}
              />
            </PopoverTrigger>
            <PopoverContent className="w-[40vw] min-w-[300px]">
              <div className="overflow">
                <p>Gender</p>
                <div className="buttonContainer">
                  {['Male', 'Female', 'Other'].map(gender => (
                    <button
                      key={gender}
                      className={selectedGender.includes(gender) ? 'selected menu-button' : 'not-selected menu-button'}
                      onClick={() => toggleSelection(gender, 'gender')}
                    >
                      {gender}
                    </button>
                  ))}
                  </div>
                  <p>Branch</p>
                  <div className="buttonContainer branch">
                  {['Chemistry', 'Electrical Engineering', 'Materials Science and Engineering', 'Chemical Engineering', 'Mechanical Engineering', 'Economics', 'Civil Engineering', 'Physics', 'Computer Science and Engineering', 'Mathematics and Statistics', 'Biological Sciences and Bioengineering', 'Aerospace Engineering', 'Earth Science', 'Statistics and Data Science'].map(branch => (
                    <button
                      key={branch}
                      className={selectedBranch.includes(branch) ? 'selected menu-button branch-button' : 'not-selected menu-button branch-button'}
                      onClick={() => toggleSelection(branch, 'department')}
                    >
                      {branch}
                    </button>
              ))}

                  </div>
                  
            </div>
            </PopoverContent>
        </PopoverAnchor>
        </Popover>
        </label>
    </>
  );
}

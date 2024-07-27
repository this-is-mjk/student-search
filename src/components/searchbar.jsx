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
    let updatedSelection;
    
    if (type === 'gender') {
      updatedSelection = selectedGender.includes(item) ? [] : [item];
      setSelectedGender(updatedSelection);
    } else {
      updatedSelection = selectedBranch.includes(item)
        ? selectedBranch.filter(i => i !== item)
        : [...selectedBranch, item];
      setSelectedBranch(updatedSelection);
    }

    setSearchTerm(searchTerm => ({ ...searchTerm, [type]: updatedSelection }));
  };

  const handleInputChange = (e) => {
    setSearchTerm({ ...searchTerm, text: e.target.value });
  };

  return (
    <>
      <label className="">
        <Popover>
          <PopoverAnchor className="outer-searchbar-box">
            <FaSearch style={{ color: "white" }} />
            <input
              className="searchbar lg:w-[40vw]"
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
                <p className="font-bold font-serif mb-4 text-center lg:text-2xl text-xl">Gender</p>
                <div className="buttonContainer">
                  {['Male', 'Female'].map(gender => (
                    <button
                      key={gender}
                      className={selectedGender.includes(gender) ? 'selected menu-button text-3xl' : 'not-selected menu-button text-xl'}
                      onClick={() => toggleSelection(gender, 'gender')}
                    >
                      {gender}
                    </button>
                  ))}
                </div>
                <p className="font-bold font-serif my-4 text-center lg:text-2xl text-xl">Branch</p>
                <div className="buttonContainer branch ">
                  {['Chemistry', 'Electrical Engineering', 'Materials Science and Engineering', 'Chemical Engineering', 'Mechanical Engineering', 'Economics', 'Civil Engineering', 'Physics', 'Computer Science and Engineering', 'Mathematics and Statistics', 'Biological Sciences and Bioengineering', 'Aerospace Engineering', 'Earth Science', 'Statistics and Data Science'].map(branch => (
                    <button
                      key={branch}
                      className={selectedBranch.includes(branch) ? 'selected menu-button branch-button lg:text-md text-sm' : 'not-selected menu-button branch-button lg:text-md text-sm'}
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

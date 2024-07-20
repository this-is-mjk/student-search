import { FaSearch, FaFilter } from "react-icons/fa";
import { IconButton } from "rsuite";
// import { Menu } from "@rsuite/icons";
import "./searchbar.css";

export default function SearchBar() {
  return (
    <label>
      <div className="outer-searchbar-box">
        <FaSearch style={{ color: "white" }} />
        <input className="searchbar" type="text" placeholder="Search" />
        <IconButton
          className="filter-button"
          onClick={() => {
            window.alert("Menu Clicked");
          }}
          icon={<FaFilter />}
        />
      </div>
    </label>
  );
}

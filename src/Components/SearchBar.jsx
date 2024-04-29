import {  useState } from "react";
import { useStateContext } from "../Context";

const SearchBar = () => {
  const { setPlace  } = useStateContext();
  const [search, setSearch] = useState('');

  const submitCity = () => {
    setPlace(search);
    setSearch("");
  };

  return (
    <div className="relative flex items-center">
      <span className="absolute right-0 bg-gray-400 rounded-full px-3 py-2">
        <i className="fa-solid fa-location-crosshairs text-gray-600 text-xl"></i>
      </span>
      <input
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            // sumit the form
            submitCity();
            
          }
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for Location ..."
        className="py-2 px-12 text-lg bg-gray-100 rounded-full w-full outline-none text-black"
      />

      <i className="fa-solid fa-magnifying-glass text-gray-400 text-xl absolute left-4"></i>
    </div>
  );
};

export default SearchBar;

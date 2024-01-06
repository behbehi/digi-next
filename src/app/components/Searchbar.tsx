import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Searchbar = () => {
  return (
      <div className="relative flex items-center flex-row-reverse">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="xl"
          className="absolute px-5 text-gray-400"
        />
        <input
          type="text"
          placeholder="جستجو"
          className="bg-gray-200 text-right px-5 py-3 w-[600px] rounded-md font-bold pr-16 border-none"
        />
      </div>
  );
}

export default Searchbar
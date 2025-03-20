/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useTitle } from "../../hooks/useTitle";

export const Search = ({ setSearch }) => {
  const search = useRef();
  const [searchvalue, setsearchvalue] = useState("");
  const nav = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const query = search.current.value;
    setsearchvalue(query);
    nav(`/productslist?q=${query}`);
    setSearch(false);
  };
  useTitle(searchvalue);

  return (
    <div className="max-w-screen-lg mx-auto max-md:px-4 my-5">
      <form
        onSubmit={handlesubmit}
        className="flex justify-between items-center gap-2"
      >
        <input
          type="text"
          ref={search}
          autoComplete="off"
          name="search"
          placeholder="Search Books..."
          className="w-full p-2 border dark:border-gray-500 bg-gray-100 dark:bg-gray-800   rounded-md  outline-none dark:text-white text-black "
        />
        <button className="bi bi-search cursor-pointer  bg-blue-600 rounded w-10 h-[38px] text-white"></button>
      </form>
    </div>
  );
};

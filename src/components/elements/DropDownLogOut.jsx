import { Link } from "react-router";

export const DropDownLogOut = () => {
  return (
    <div className="dropdownlogin absolute right-16 top-[75px] z-10">
      <ul className="list-none bg-gray-200 text-black dark:bg-slate-900 dark:text-gray-200 font-medium text-md  py-2  min-w-44  border border-black dark:border-gray-500 rounded-md ">
        <li className=" cursor-pointer py-2 px-4 hover:bg-gray-700  dark:hover:text-gray-200  ">
          <Link className="block w-full  " to="/productslist">
            All eBooks
          </Link>
        </li>
        <li className=" cursor-pointer  py-2  px-4 hover:bg-gray-700 dark:hover:text-gray-200   ">
          <Link className="block w-full  " to="/login">
            login
          </Link>
        </li>
        <li className=" cursor-pointer  py-2  px-4 hover:bg-gray-700 dark:hover:text-gray-200   ">
          <Link className="block w-full  " to="/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

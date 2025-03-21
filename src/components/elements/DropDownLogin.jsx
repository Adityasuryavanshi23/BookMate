/* eslint-disable react/prop-types */
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUser, logout } from "../../utils";

export const DropDownLogin = ({ setdropdown }) => {
  const nav = useNavigate();
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const data = await getUser();
        data.email ? setuser(data) : logout();
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchuser();
  }, []);

  const handlelogout = () => {
    logout();
    toast.error("You have been logged out");
    nav("/login");
    setdropdown(false);
  };

  return (
    <div className="dropdownlogin absolute right-16 top-[75px] z-10">
      <ul className="list-none bg-gray-200 text-black dark:bg-slate-900 dark:text-gray-200 font-medium text-md flex justify-center py-2  flex-col min-w-44  rounded-lg border border-black dark:border-gray-500 ">
        <li className=" px-3 py-2 cursor-pointer ">{user.email}</li>
        <li className=" px-3 py-2 cursor-pointer hover:bg-gray-700 dark:hover:text-gray-200   ">
          <Link className="block w-full  " to="/productslist">
            All eBooks
          </Link>
        </li>
        <li className=" px-3 py-2 cursor-pointer hover:bg-gray-700 dark:hover:text-gray-200   ">
          <Link className="block w-full  " to="/dashboard">
            DashBoard
          </Link>
        </li>
        <li
          onClick={handlelogout}
          className=" px-3 py-2 cursor-pointer hover:bg-gray-700 dark:hover:text-gray-200   "
        >
          <Link className="block w-full  ">Log out</Link>
        </li>
      </ul>
    </div>
  );
};

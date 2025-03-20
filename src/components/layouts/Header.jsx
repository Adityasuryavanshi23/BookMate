import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { DropDownLogin, DropDownLogOut, Search } from "../index";
import { useCart } from "../../context/cartContext";

export const Header = () => {
  const [search, setSearch] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  const { pathname } = useLocation();

  const token = sessionStorage.getItem("token");
  const { cartList } = useCart();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark", JSON.stringify(darkMode));

    pathname && setdropdown(false);
  }, [darkMode, pathname]);
  return (
    <header>
      <nav className=" m-auto  border-gray-200 border-b dark:border-gray-500 dark:bg-slate-900  ">
        <div className="flex flex-wrap justify-between items-center mx-auto  border-gray-500 max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/public/logo192.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              BookMate
            </span>
          </Link>
          <div className="flex items-center text-[20px] gap-4 dark:text-white text-black ">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="bi bi-gear-wide-connected cursor-pointer"
            ></span>
            <span
              className="bi bi-search cursor-pointer "
              onClick={() => setSearch(!search)}
            ></span>
            <Link to="/cart" className="bi bi-cart cursor-pointer relative">
              <div className="absolute bg-red-600 text-white flex justify-center items-center w-5 h-5 rounded-[50%] top-[-5px] right-[-8px] ">
                <p className="font-semibold text-[13px]">{cartList.length}</p>
              </div>
            </Link>
            <span
              onClick={() => setdropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer "
            ></span>
          </div>
        </div>
      </nav>
      {search && <Search setSearch={setSearch} />}
      {dropdown &&
        (token ? (
          <DropDownLogin setdropdown={setdropdown} />
        ) : (
          <DropDownLogOut />
        ))}
    </header>
  );
};

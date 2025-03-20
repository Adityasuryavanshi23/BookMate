import { Link } from "react-router";
import logo from "../assets/images/logo.png";

export const PageNotFound = () => {
  return (
    <main>
      <section className="max-w-screen-lg  m-auto">
        <h1 className="text-center text-3xl capitalize font-semibold">
          Oops! 404 Not Found
        </h1>
        <div className="grid place-items-center">
          <img src={logo} alt="logo" className="w-[400px] mt-4" />
        </div>
        <div className="text-center mt-4">
          <button className=" font-semibold capitalize bg-blue-600 hover:bg-blue-800 rounded-md px-4 py-2">
            <Link to={"/"}>Go to BookMate</Link>
          </button>
        </div>
      </section>
    </main>
  );
};

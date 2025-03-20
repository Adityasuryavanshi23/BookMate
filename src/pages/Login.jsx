import { useRef } from "react";
import { toast } from "react-toastify";
import { login } from "../utils/index";
import { useNavigate } from "react-router";
import { useTitle } from "../hooks/useTitle";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  useTitle("Login");

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const authlogindetail = {
        email: email.current.value,
        password: password.current.value,
      };
      const data = await login(authlogindetail);
      data.accessToken
        ? (navigate("/"),
          toast.success(`Succesfully Logged in ${data.user.name}`))
        : toast.error(data);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <main>
      <section className="px-4 md:px-12">
        <h1 className="text-center capitalize text-4xl text-blue-400 mt-10">
          Login
        </h1>
        <form action="" onSubmit={handlelogin}>
          <label className="block my-6" htmlFor="email">
            Your Email :
          </label>
          <input
            type="text"
            className="dark:text-white w-[100%] p-2 rounded-lg  bg-slate-500   text-black  "
            autoComplete="off"
            name="email"
            id="email"
            ref={email}
            required
          />

          <label className="block my-6" htmlFor="password">
            Your Password :{" "}
          </label>
          <input
            type="password"
            className="dark:text-white w-[100%] p-2 rounded-lg  bg-slate-500   text-black  "
            autoComplete="off"
            name="password"
            id="password"
            ref={password}
            required
          />
          <div className="mt-6">
            <button
              type="submit"
              className="capitalize px-4 py-2 bg-blue-800 hover:bg-blue-500 rounded-lg "
            >
              Login
            </button>
            <button
              type="submit"
              className="capitalize px-4 py-2 bg-blue-800 hover:bg-blue-500 rounded-md ml-4 "
            >
              Login As Guest
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

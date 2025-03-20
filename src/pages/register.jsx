import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { register } from "../utils";
import { useTitle } from "../hooks/useTitle";

export const Register = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  useTitle("Register");

  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userAuth = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      const data = await register(userAuth);

      data.accessToken
        ? (nav("/productslist"),
          toast.success(`Welcome to Our Store ${data.user.name}`))
        : toast.error("you email is already registered");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <main>
      <section className="px-4 md:px-12">
        <h1 className="capitalize text-4xl text-blue-400 mt-10  text-center">
          register
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <label className="block my-6" htmlFor="name">
            Your Name :
          </label>
          <input
            type="text"
            className="dark:text-white w-[100%] p-2 rounded-lg capitalize  bg-slate-500  text-black  "
            autoComplete="off"
            name="name"
            id="name"
            ref={name}
            required
          />

          <label className="block my-6" htmlFor="email">
            Your Email :
          </label>
          <input
            type="text"
            className="dark:text-white w-[100%] p-2 rounded-lg   bg-slate-500   text-black  "
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
            className="dark:text-white w-[100%] p-2 rounded-lg   bg-slate-500   text-black  "
            autoComplete="off"
            name="password"
            id="password"
            ref={password}
            required
          />
          <div className="mt-6">
            <button
              type="submit"
              className="capitalize px-4 py-2 bg-blue-800 hover:bg-blue-500 rounded-md"
            >
              register
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

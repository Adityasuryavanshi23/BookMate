import { useEffect, useState } from "react";
import { useCart } from "../../../context/cartContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getUser, createorder } from "../../../utils";
import { useTitle } from "../../../hooks/useTitle";

/* eslint-disable react/prop-types */
export const CartCheckout = ({ setcheckout }) => {
  const { total, cartList, clearCart } = useCart();
  useTitle("CardPyament");
  const [users, setuser] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await getUser();
        setuser(data);
        console.log(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchdata();
  }, []);

  const handlepayment = async (e) => {
    e.preventDefault();
    try {
      const data = await createorder(cartList, total, users);
      nav("/orderpage", { state: { status: true, data: data } });
      toast.success("Order Placed Successfully");
    } catch (error) {
      nav("/orderpage", { state: { status: false } });
      toast.error(error.message);
    }

    clearCart();
  };

  return (
    <section>
      <div className="fixed w-full h-full top-0 left-0 border bg-black opacity-50 "></div>
      <div className="max-w-md w-full rounded-md border border-gray-500 p-4 left-[37%] top-[5%] fixed  bg-slate-800 mt-6 ">
        <div>
          <div className="flex justify-between mb-4">
            <h1 className="uppercase font-medium text-lg ">
              <span className="mr-2 text-lg bi bi-credit-card"></span>
              card payment
            </h1>
            <span
              onClick={() => setcheckout(false)}
              className="cursor-pointer bi bi-x text-2xl text-white rounded-md bg-red-600 px-2 hover:bg-red-800 "
            ></span>
          </div>
          <form onSubmit={handlepayment} action="">
            <label className="block mb-4" htmlFor="name">
              Name :
            </label>
            <input
              type="text"
              className="dark:text-white w-[100%] p-2 rounded-lg mb-4 bg-slate-500   text-black  "
              autoComplete="off"
              name="name"
              value={users.name || ""}
              disabled
              id="name"
              required
            />
            <label className="block mb-4 " htmlFor="email">
              Email :
            </label>
            <input
              type="text"
              className="dark:text-white w-[100%] mb-4 p-2 rounded-lg  bg-slate-500   text-black  "
              autoComplete="off"
              name="email"
              value={users.email || ""}
              id="email"
              required
              disabled
            />
            <label className="block mb-4 " htmlFor="cardnumber">
              Card Number :
            </label>
            <input
              type="number"
              className="dark:text-white w-[100%] mb-4 p-2 rounded-lg  bg-slate-500   text-black  "
              autoComplete="off"
              name="cardnumber"
              value="123434576543534"
              disabled
              id="cardnumber"
              required
            />
            <label className="block mb-4 " htmlFor="cardnumber">
              Expiry Date :
            </label>
            <input
              type="text"
              className="dark:text-white mb-4 w-24 mr-2 p-2 rounded-lg  bg-slate-500   text-black  "
              autoComplete="off"
              name="cardnumber"
              value={"01"}
              id="cardnumber"
              required
              disabled
            />
            <input
              type="text"
              className="dark:text-white  w-24  p-2 rounded-lg  bg-slate-500   text-black  "
              autoComplete="off"
              name="cardnumber"
              value={"35"}
              id="cardnumber"
              required
              disabled
            />
            <label className="block  mb-4 " htmlFor="securitycode">
              Security Code :
            </label>
            <input
              type="number"
              className="dark:text-white w-[100%] mb-4 p-2 rounded-lg  bg-slate-500   text-black  "
              autoComplete="off"
              name="securitycode"
              id="securitycode"
              disabled
              value={"123"}
              required
            />
            <p className="text-center mb-4 text-3xl text-green-500">${total}</p>
            <button
              type="submit"
              className="w-full hover:bg-blue-900 bg-blue-700 rounded-md py-2 uppercase"
            >
              <span className="mr-1  bi bi-lock-fill"></span>pay now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

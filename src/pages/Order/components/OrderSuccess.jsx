/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const OrderSuccess = ({ data }) => {
  const nav = useNavigate();

  if (data === "jwt expired") {
    toast.error("Session expired, please login again");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("bmid");
    nav("/login");
  }
  return (
    <section className="max-w-screen-md  border border-gray-500 mx-auto mt-12  py-4">
      <div>
        <div className="bi bi-check-circle cursor-pointer  text-[90px] text-green-600 text-center"></div>
        <p className="text-center capitalize">
          thank you "{data.user.name}" for your order!
        </p>
        <p className="text-center capitalize mb-4">your order id : {data.id}</p>
        <p className="text-center capitalize">your order is comfirmed.</p>
        <p className="text-center  mb-4">
          please check your mail ( {data.user.email} ) for the eBooks
        </p>
        <p className="text-center capitalize mb-6">
          payment id : {`BM_${Math.floor(Math.random() * 10000000)}`}
        </p>
        <div className="text-center capitalize mt-4">
          <button
            onClick={() => nav("/dashboard")}
            className="bg-blue-700 px-3 py-2 font-medium rounded-md hover:bg-blue-900"
          >
            Check Dashboard
            <span className="bi bi-cart cursor-pointer ml-2"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

/* eslint-disable react/prop-types */
import { useState } from "react";

export const Accourdion = ({ faq }) => {
  const { question, answer } = faq;
  const [show, setshow] = useState(false);
  return (
    <div>
      <div className="px-10 ">
        <button
          onClick={() => setshow(!show)}
          className="flex justify-between items-center w-full  border-b-2 border-gray-400 dark:border-gray-500  py-4 capitalize "
        >
          <p className="text-lg text-gray-900  dark:text-white">{question}</p>
          {show ? (
            <i className="bi bi-caret-up-fill "></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </button>
      </div>
      {show && (
        <div className="px-10 pt-2 py-4 ">
          <p className="text-lg text-left border-b-2 border-gray-200 py-4 text-gray-600 capitalize  dark:text-white">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

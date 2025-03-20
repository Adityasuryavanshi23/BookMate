/* eslint-disable react/prop-types */
export const TestimonialCard = ({ info }) => {
  const { header_msg, des, img, name, role } = info;
  return (
    <div className="w-[624px] border border-gray-200  dark:border-gray-500 p-10">
      <p className="text-center text-xl capitalize text-black dark:text-white font-semibold mb-2">
        {header_msg}
      </p>
      <p className="text-center text-md capitalize dark:text-gray-300 mt-4 text-gray-600">
        {des}
      </p>
      <div className="flex justify-center items-center mt-10">
        <img src={img} alt={name} className="rounded-full h-12 w-12  " />
        <div className="flex flex-col ml-4">
          <p className="capitalize text-xl font-semibold "> {name}</p>
          <p className="capitalize text-xl font-semibold">{role}</p>
        </div>
      </div>
    </div>
  );
};

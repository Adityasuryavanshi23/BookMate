import { Link } from "react-router";
import heroimg from "../../../assets/images/hero.avif";

export const Hero = () => {
  return (
    <section className=" flex-col md:flex-row m-auto  flex justify-center items-center gap-4">
      <div>
        <h1 className="text-black dark:text-white capitalize text-2xl md:text-3xl  font-semibold text-left ">
          the ultimate ebook store
        </h1>
        <p className="text-black dark:text-white capitalize mt-2 max-md:text-[14px]  md:mt-4 text-left ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet veniam
          tenetur doloremque ex ratione laborum repellendus sit quam. Asperiores
          nemo ipsum amet necessitatibus. Amet quo vero eaque neque! Magni,
          commodi?
        </p>
        <div className="text-left mt-6 md:mt-6">
          <Link
            to="/productslist"
            className="text-white capitalize bg-blue-800 hover:bg-blue-900  font-semibold text-sm md:text-[16px] rounded py-2 px-4 "
          >
            explore ebooks
          </Link>
        </div>
      </div>
      <div className=" max-w-md md:max-w-lg mt-6">
        <img src={heroimg} alt="Hero-img" className="rounded-lg" />
      </div>
    </section>
  );
};

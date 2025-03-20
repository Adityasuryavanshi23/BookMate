/* eslint-disable react/prop-types */
import { Hero, TestiMonial, FeaturedCards, Faq } from "./index";
import { useTitle } from "../../hooks/useTitle";

export const HomePage = ({ title }) => {
  useTitle(title);
  return (
    <main>
      <Hero />
      <FeaturedCards />
      <TestiMonial />
      <Faq />
    </main>
  );
};

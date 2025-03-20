import { TestimonialCard } from "./TestimonialCard";

export const TestiMonial = () => {
  const testimonials = [
    {
      id: 1,
      header_msg: "very easy this way to integrate",
      des: "loremm ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "John Doe",
      role: "developer at random AI",
    },
    {
      id: 2,
      header_msg: "solid foundation for any project",
      des: "loremm ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "jhon carter",
      role: "frontend developer",
    },
    {
      id: 3,
      header_msg: "mindblowing workflow integration",
      des: "loremm ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "david williams",
      role: "fullstack developer",
    },
    {
      id: 4,
      header_msg: "efficient collaborating",
      des: "loremm ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "aditya suryavanshi",
      role: "software engineer",
    },
  ];

  return (
    <section className="max-w-screen-xl m-auto my-24">
      <h1 className="text-center text-xl underline decoration-2  dark:decoration-slate-400 underline-offset-8 capitalize">
        students about bookmate
      </h1>
      <div className="flex flex-wrap mt-8  shadow-md ">
        {testimonials.map((info) => (
          <TestimonialCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

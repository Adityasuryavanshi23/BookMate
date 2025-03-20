import { Accourdion } from "./Accourdion";

export const Faq = () => {
  const faq = [
    {
      id: 1,
      question: "why should I use CodeBook",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos?",
    },
    {
      id: 2,
      question: "Can I Acess my ebooks online",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos?",
    },
    {
      id: 3,
      question: "do you offer refunds",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos?",
    },
    {
      id: 4,
      question: "do you support international payments",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos? , sit amet consectetur adipisicing elit. Recusandae laboriosam sapiente similique minima vero labore hic dolor dolorum error eos?",
    },
  ];
  return (
    <section className="max-w-screen-xl m-auto border border-gray-200 dark:border-slate-500  rounded my-24 py-8 shadow-md">
      <div>
        <h1 className="capitalize text-xl dark:text-white underline dark:decoration-slate-400 decoration-2 text-center underline-offset-8 ">
          questions in mind?
        </h1>
        {faq.map((faq) => (
          <Accourdion faq={faq} key={faq.id} />
        ))}
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What services does Mayowa Sowunmi provide?",
    answer: "Mayowa designs and develops responsive websites, full-stack web applications, dashboards, APIs, and product interfaces for businesses and startups.",
  },
  {
    question: "What technologies does Mayowa use?",
    answer: "Mayowa works with React, Next.js, TypeScript, Node.js, Express, MongoDB, Firebase, Tailwind CSS, and modern web APIs.",
  },
  {
    question: "What kinds of applications has Mayowa built?",
    answer: "His work includes interview-preparation software, equipment marketplaces, geospatial pricing tools, AI-assisted career tools, and client business websites.",
  },
  {
    question: "How can I hire Mayowa?",
    answer: "Use the contact form on this website, email smayowa176@gmail.com, or reach out through LinkedIn or WhatsApp.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const Faq = () => (
  <section className="bg-white dark:bg-[#001122] font-montserrat" aria-labelledby="faq-heading">
    <div className="mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-16">
      <p className="uppercase text-sm md:text-lg pb-2">Frequently asked questions</p>
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-8">
        Working with Mayowa
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map(({ question, answer }) => (
          <article key={question}>
            <h3 className="text-lg font-semibold mb-2">{question}</h3>
            <p className="text-sm leading-6">{answer}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Faq;

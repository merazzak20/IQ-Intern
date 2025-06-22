import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import SectiontionTitle from "../../../components/shared/SectiontionTitle";

const FAQ = () => {
  const [faqs, setFaqs] = useState();

  useEffect(() => {
    fetch("/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data))
      .catch((err) => console.error("Failed to load FAQs:", err));
  }, []);
  return (
    <div className="my-5">
      <Container>
        <SectiontionTitle title={"Some FAQ"} />
        <div className="join join-vertical bg-base-100 w-full">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className="collapse collapse-arrow join-item border-base-300 border"
            >
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title font-semibold">
                {faq?.question}
              </div>
              <div className="collapse-content text-sm">{faq?.answer}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;

import React from "react";
import Container from "../../../components/shared/Container";
import SectiontionTitle from "../../../components/shared/SectiontionTitle";

const reasons = [
  {
    title: "Real-World Projects",
    description:
      "Intern with companies on practical tasks that add real value to your portfolio.",
    icon: "💼",
  },
  {
    title: "Flexible Timings",
    description:
      "Balance your academic schedule while gaining industry experience from home.",
    icon: "⏰",
  },
  {
    title: "Certified Experience",
    description:
      "Receive official certificates upon completion to enhance your resume and LinkedIn profile.",
    icon: "📜",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn under guidance from experienced professionals who provide regular feedback.",
    icon: "🧑‍🏫",
  },
];

const WhyChoose = () => {
  return (
    <Container>
      <SectiontionTitle title={"Why Choose IQ Interns?"}></SectiontionTitle>
      <p className=" text-gray-500 mt-2">
        Discover the benefits of joining a platform that focuses on real
        learning, flexibility, and growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
        {reasons.map((item, index) => (
          <div
            key={index}
            className=" hover:shadow-md transition p-6 text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyChoose;

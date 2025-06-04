import React from "react";
import Container from "../../../components/shared/Container";
import SectiontionTitle from "../../../components/shared/SectiontionTitle";
import about from "../../../assets/about.jpeg";

const AboutSection = () => {
  return (
    <div className="my-10">
      <Container className="mx-auto">
        <SectiontionTitle title={"About Us"}></SectiontionTitle>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5 ">
          {/* text */}
          <div>
            <p className="text-justify my-2">
              At IQ Interns, we believe in empowering students and fresh
              graduates with real-world experience through impactful, short-term
              internships. Our platform connects talented individuals with
              industry-relevant projects, enabling them to build their skills,
              portfolios, and confidence — all from the comfort of their homes.
            </p>
            <p className="text-justify my-2">
              We collaborate with top companies, startups, and educators to
              offer curated internship programs that are flexible, meaningful,
              and certificate-backed. With a focus on learning-by-doing, IQ
              Interns helps bridge the gap between academic knowledge and
              professional readiness.
            </p>
            <p className="text-justify my-2">
              Whether you're looking to explore your passion, gain hands-on
              experience, or boost your resume — IQ Interns is your launchpad to
              a brighter future.
            </p>
            <button className="btn buttonColor px-5 rounded-none shadow-none mt-2">
              Explore!
            </button>
          </div>

          {/* Image */}
          <div className="w-full h-64 md:h-[50vh] overflow-hidden flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center rounded-md"
              src={about}
              alt="About Image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;

import React from "react";
import Container from "../../../components/shared/Container";
import SectiontionTitle from "../../../components/shared/SectiontionTitle";

const MissionVision = () => {
  return (
    <div className="py-12">
      <Container>
        <SectiontionTitle title={"Our Mission & Vision"}></SectiontionTitle>
        <p className="mt-2 text-gray-500">
          At IQ Interns, we're committed to reshaping internship experiences for
          students across the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
          {/* Mission */}
          <div className=" p-6 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-800">
              🎯 Our Mission
            </h3>
            <p className="text-gray-700">
              To provide accessible, flexible, and industry-relevant internship
              experiences that empower students with real-world skills and
              confidence — no matter where they are.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 hover:shadow-md transition">
            <h3 className="text-2xl font-semibold mb-3 text-teal-800">
              🌍 Our Vision
            </h3>
            <p className="text-gray-700">
              We envision a future where every learner has the opportunity to
              build a strong professional foundation through impactful virtual
              internships, breaking geographic and economic barriers.
            </p>
          </div>
        </div>
      </Container>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Mission & Vision
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            At IQ Interns, we're committed to reshaping internship experiences
            for students across the globe.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default MissionVision;

import React from "react";
import apply from "../../../assets/apply.png";
import matched from "../../../assets/matched.png";
import project from "../../../assets/project.png";
import certificate from "../../../assets/certificate.png";

const HeroCards = () => {
  return (
    <div>
      <div className="bg-black/70 px-8 py-5 text-white border-r-4 border-[#007a88] grid grid-cols-4 gap-6">
        <div className="cardItem max-w-[100px]">
          <img
            className="max-w-[60px] mb-2"
            src={apply}
            alt="Apply for Internships"
          />
          <p className="text-md font-semibold">Apply for Internships</p>
        </div>
        <div className="cardItem max-w-[100px]">
          <img className="max-w-[60px] mb-2" src={matched} alt="Get Matched" />
          <p className="text-md font-semibold">Get Matched</p>
        </div>
        <div className="cardItem max-w-[100px]">
          <img
            className="max-w-[60px] mb-2"
            src={project}
            alt="Work on Real Projects"
          />
          <p className="text-md font-semibold">Work on Real Projects</p>
        </div>
        <div className="cardItem max-w-[100px]">
          <img
            className="max-w-[60px] mb-2"
            src={certificate}
            alt="Earn Certificates"
          />
          <p className="text-md font-semibold">Earn Certificates</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;

import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import MissionVision from "./AboutComponent/MissionVission";
import WhyChoose from "./AboutComponent/WhyChoose";
import CTA from "./AboutComponent/CTA";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title={"About Us!"}></PageHeader>
      <MissionVision></MissionVision>
      <WhyChoose></WhyChoose>
      <CTA></CTA>
    </div>
  );
};

export default AboutPage;

import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import MissionVision from "./AboutComponent/MissionVission";

const AboutPage = () => {
  return (
    <div>
      <PageHeader title={"About Us!"}></PageHeader>
      <MissionVision></MissionVision>
    </div>
  );
};

export default AboutPage;

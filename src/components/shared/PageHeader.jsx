import React from "react";
import bg from "../../assets/sectionhead.jpg";
import Container from "./Container";

const PageHeader = ({ title }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 122, 136, 0.8) 100%),url(${bg})`,
        width: "100%",
        height: "40vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <Container>
        <div className="inline-flex justify-center items-center h-[40vh] w-full">
          <p className="text-4xl font-black text-white">{title}</p>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;

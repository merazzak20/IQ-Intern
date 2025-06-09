import React from "react";
import bg from "../../assets/sectionhead.jpg";

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
      <p className="absolute top-[50%] left-[50%] text-4xl font-black text-white">
        {title}
      </p>
    </div>
  );
};

export default PageHeader;

import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import AllDomains from "./DomainpageComponents/AllDomains";

const Domains = () => {
  return (
    <div>
      <PageHeader title={"Here is All Domains!"}></PageHeader>
      <AllDomains></AllDomains>
    </div>
  );
};

export default Domains;

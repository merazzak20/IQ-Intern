import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import ApplicationForm from "./ApplicationComponents/ApplicationForm";

const ApplyPage = () => {
  return (
    <div>
      <PageHeader title={"Apply Here!"}></PageHeader>
      <ApplicationForm></ApplicationForm>
    </div>
  );
};

export default ApplyPage;

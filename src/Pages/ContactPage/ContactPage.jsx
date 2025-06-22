import React from "react";
import PageHeader from "../../components/shared/PageHeader";
import Contact from "../HomePage/HomeComponents/Contact";

const ContactPage = () => {
  return (
    <div>
      <PageHeader title={"Contact with Us!"}></PageHeader>
      <Contact></Contact>
    </div>
  );
};

export default ContactPage;

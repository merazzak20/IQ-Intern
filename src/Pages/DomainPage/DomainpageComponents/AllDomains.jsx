import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import SectiontionTitle from "../../../components/shared/SectiontionTitle";
import { MdOutlineArrowRightAlt, MdVerified } from "react-icons/md";
// import { FiArrowUpRight } from "react-icons/fi";
import Loader from "../../../components/shared/Loader";
import { Link } from "react-router";
import DetailModal from "../../../components/shared/DetailModal";

const AllDomains = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/internship.json")
      .then((res) => res.json())
      .then((data) => {
        setDomains(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch internship data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-14">
      <Container>
        <SectiontionTitle title={"Internship Domains"} />
        {loading ? (
          <Loader></Loader>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 relative">
            {domains.map((d) => (
              <div
                key={d?.id}
                className="bg-white shadow-md rounded-none overflow-hidden transition-transform "
              >
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-48 object-cover hover:scale-[1.02] transition-all duration-300"
                />

                <div className="p-5 pb-7 relative">
                  <MdVerified className="absolute right-6 top-4 text-[#003049] text-5xl opacity-20" />
                  <h3 className="text-xl font-semibold text-[#003049] mb-2">
                    {d.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 text-justify">
                    {d.description}
                  </p>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                    className=" btn btn-sm  buttonColor border-none rounded-none shadow-none"
                  >
                    Read More <MdOutlineArrowRightAlt className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
      <DetailModal></DetailModal>
    </div>
  );
};

export default AllDomains;

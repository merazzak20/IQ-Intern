import { Link } from "react-router";
import Container from "../../../components/shared/Container";

const CTA = () => {
  return (
    <div className="py-14 bg-gradient-to-l from-[#007A88] to-[#022440] text-white text-center ">
      <Container>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Kickstart Your Career?
          </h2>
          <p className="text-lg mb-8">
            Join IQ Interns and gain hands-on experience, mentor support, and a
            certified internship from the comfort of your home.
          </p>
          <Link
            to="/apply"
            className="inline-block bg-white text-[#007A88] font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Apply Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CTA;

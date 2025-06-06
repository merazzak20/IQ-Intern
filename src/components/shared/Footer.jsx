import Container from "./Container";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#00141f] text-gray-300 py-5 pt-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
          <div className="md:max-w-96">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 ">
              <img
                src={logo}
                alt="logo"
                className="max-w-[120px]  filter invert brightness-0"
              />
              <p className="text-4xl font-bold">IQ Intern</p>
            </a>
            <p className="mt-6 text-sm text-justify">
              At IQ Interns, we believe in empowering students and fresh
              graduates with real-world experience through impactful, short-term
              internships. Our platform connects talented individuals with
              industry-relevant projects, enabling them to build their skills,
              portfolios, and confidence — all from the comfort of their homes.
            </p>
          </div>
          <div className="flex-1 flex items-start md:justify-evenly gap-20 md:gap-40 mt-4 md:mt-14">
            <div>
              <h2 className="font-semibold mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>+1-234-567-890</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-4 text-center text-sm pb-5">
          Copyright {new Date().getFullYear()} - All Right Reserved by{" "}
          <a
            className="text-[#007a88] font-semibold"
            target="_blank"
            href="https://my-portfolio-f17dc.web.app/"
          >
            Abdur Razzak
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

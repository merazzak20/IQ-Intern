import Hero from "./HomeComponents/Hero";
import AboutSection from "./HomeComponents/AboutSection";
import InternshipDomain from "./HomeComponents/InternshipDomain";
import Testimonial from "./HomeComponents/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <InternshipDomain></InternshipDomain>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

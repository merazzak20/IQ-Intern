import Hero from "./HomeComponents/Hero";
import AboutSection from "./HomeComponents/AboutSection";
import InternshipDomain from "./HomeComponents/InternshipDomain";
import Testimonial from "./HomeComponents/Testimonial";
import Contact from "./HomeComponents/Contact";
import FAQ from "./HomeComponents/FAQ";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutSection></AboutSection>
      <InternshipDomain></InternshipDomain>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;

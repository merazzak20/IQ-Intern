import React from "react";
import videoSrc from "../../../assets/v1.mp4";
import Container from "../../../components/shared/Container";
import SplitText from "../../../../reactBits/SplitText/SplitText";
import { Link } from "react-router";
import HeroCards from "./HeroCards";

const Hero = () => {
  // const handleAnimationComplete = () => {
  //   console.log("All letters have animated!");
  // };
  return (
    <div className="w-full min-h-[80vh] relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay text */}
      <div
        className="absolute inset-0 z-10 flex items-center bg-[rgba(0,20,31,0.7)]"
        style={{
          background:
            "linear-gradient(90deg,rgba(0, 28, 38, 1) 0%, rgba(237, 221, 83, 0.1) 100%)",
        }}
      >
        <Container className="mx-0">
          <div className="flex flex-col items-start text-white mt-5">
            {/* title */}
            <SplitText
              text=" Empower Your Career with IQ Interns"
              className="text-4xl font-bold text-center"
              delay={100}
              duration={0.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              // textAlign="center"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
            {/* <h1 className="text-4xl font-bold mb-2">
              Empower Your Career with IQ Interns
            </h1> */}
            <p className="text-lg">
              Get real-world experience with short-term, impactful remote
              internships.
            </p>

            <Link
              to={"/contact"}
              className="btn buttonColor px-5 border-none rounded-none shadow-none mt-2"
            >
              Contact With Us!
            </Link>
          </div>
          {/* hero cards  */}
          <div className="absolute bottom-8 right-24 hidden lg:block">
            <HeroCards></HeroCards>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;

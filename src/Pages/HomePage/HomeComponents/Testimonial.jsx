import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import SectiontionTitle from "../../../components/shared/SectiontionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("can't load testimonial data", error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, // Should match slidesToShow
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-14">
      <Container>
        <SectiontionTitle title={"Student's Feedback"}></SectiontionTitle>
        <Slider {...settings}>
          {feedbacks?.map((feed) => (
            <div
              key={feed?.id}
              class="w-full max-w-[500px] space-y-4 p-3 text-sm "
            >
              <div class="flex justify-between items-center ">
                <div class="flex items-center gap-1">
                  <img
                    class="h-12 w-12 mr-2 rounded-full object-cover"
                    src={feed?.image}
                    alt="userImage1"
                  />
                  {/* Dynamic Stars */}
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.049.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 0 0-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.363-1.118L.98 6.72c-.784-.57-.382-1.81.587-1.81h3.461a1 1 0 0 0 .951-.69z"
                        fill={i < (feed?.rating || 0) ? "#FF532E" : "#774C42"}
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-500">{feed?.feedback}</p>
              <div>
                <p class="font-semibold text-xl">{feed?.name}</p>
                <p className="text-gray-500">{feed?.date}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;

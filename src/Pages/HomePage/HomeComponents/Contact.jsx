import React from "react";
import videoSrc from "../../../assets/v2.mp4"; // replace with your actual path

const Contact = () => {
  return (
    <div className="max-h-[60vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden my-14">
      {/* Left side - Video */}
      <div className="relative h-[300px] md:h-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold px-4 text-center">
          Let's Connect!
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <form className="w-full md:w-10/12 space-y-6">
          {/* <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2> */}

          {/* name & email */}
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-1/2 border border-gray-300 text-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#57969D]"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-1/2 border border-gray-300 text-gray-600 rounded-md px-4 py-2 focus:outline-none  focus:ring-1 focus:ring-[#57969D]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              className="mt-1 block w-full border border-gray-300 text-gray-600 rounded-md px-4 py-2 focus:outline-none  focus:ring-1 focus:ring-[#57969D]"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

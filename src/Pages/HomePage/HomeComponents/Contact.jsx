import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import videoSrc from "../../../assets/v2.mp4"; // replace with your actual path
import toast from "react-hot-toast";
import Loader from "../../../components/shared/Loader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Contact = () => {
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const sendMail = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      to_name: "IQ Intern", // Add the recipient's name here
      reply_to: formData.email, // Reply-to email (optional)
    };
    const message = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs
        .send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          sendMail,
          {
            publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            // console.log("SUCCESS!");
            toast.success("Mail successfully send👍");
            setFormData({ name: "", email: "", message: "" });
            setLoader(false);
          },
          (error) => {
            // console.log("FAILED...", error.text);
            toast.error(error.message);
          }
        );
      await axiosPublic.post("/messages", message);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div
      id="contact"
      className="min-h-[60vh] grid grid-cols-1 md:grid-cols-2 overflow-hidden my-14"
    >
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold px-4 text-center">
          Let's Connect!
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <form onSubmit={handleSubmit} className="w-full md:w-10/12 space-y-6">
          {/* name & email */}
          <div className="flex flex-col md:flex-row w-full gap-3">
            <div className="w-full md:w-1/2">
              {/* <label className="block text-sm font-medium text-gray-700">
                Name
              </label> */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full border border-gray-300 text-gray-600 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#57969D]"
                placeholder="Your Name"
              />
            </div>

            <div className="w-full md:w-1/2">
              {/* <label className="block text-sm font-medium text-gray-700">
                Email
              </label> */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full border border-gray-300 text-gray-600 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#57969D]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* message */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700">
              Message
            </label> */}
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="mt-1 block w-full border border-gray-300 text-gray-600 rounded-none px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#57969D]"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#007A88] cursor-pointer text-white px-6 py-2 hover:bg-[#365e63] transition"
          >
            {loader ? <Loader></Loader> : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

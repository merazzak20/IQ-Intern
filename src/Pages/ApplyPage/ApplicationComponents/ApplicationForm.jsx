import React, { useState } from "react";
import Container from "../../../components/shared/Container";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ApplicationForm = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    education: "",
    university: "",
    domain: "",
    country: "",
    linkedIn: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    const applyData = {
      fullName: formData.fullName,
      email: formData.email,
      whatsapp: formData.whatsapp,
      education: formData.education,
      university: formData.university,
      domain: formData.domain,
      country: formData.country,
      linkedIn: formData.linkedIn,
      message: formData.message,
    };

    try {
      await axiosPublic.post("/applications", applyData);
      toast.success("Application successfully submited.");
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        education: "",
        university: "",
        domain: "",
        country: "",
        linkedIn: "",
        message: "",
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className=" mx-auto  shadow-md rounded-xl p-8">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-6">
          Internship Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
          {/* Full Name */}
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Enter your full name"
            />
          </div>

          {/* email + whatsapp */}
          <div className="flex sm:flex-col md:flex-row gap-4 w-full">
            {/* Email */}
            <div className="w-full md:max-w-1/2">
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="example@mail.com"
              />
            </div>

            {/* whatsapp Number */}
            <div className="w-full md:max-w-1/2">
              <label className="block font-medium mb-1">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsapp"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="e.g. 017XXXXXXXX"
              />
            </div>
          </div>

          {/* education + university */}
          <div className="flex sm:flex-col md:flex-row gap-4 w-full">
            {/* Education */}
            <div className="w-full md:max-w-1/2">
              <label className="block font-medium mb-1">Education</label>
              <input
                type="text"
                name="education"
                required
                value={formData.education}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="e.g. BSc in CSE"
              />
            </div>

            {/* University */}
            <div className="w-full md:max-w-1/2">
              <label className="block font-medium mb-1">University</label>
              <input
                type="text"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="e.g. ABC University"
              />
            </div>
          </div>

          {/* domain + country */}
          <div className="flex sm:flex-col md:flex-row gap-4 w-full">
            {/* Internship Domain */}
            <div className="w-full md:max-w-1/2">
              <label className="block font-medium mb-1">
                Preferred Internship Domain
              </label>
              <select
                name="domain"
                required
                value={formData.domain}
                onChange={handleChange}
                className="w-full border text-gray-500 border-gray-300 p-3 rounded"
              >
                <option value="">Select an internship domain</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Data Science">Data Science</option>
                <option value="Content Writing">Content Writing</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>

            {/* Country */}
            <div className="w-full md:max-w-1/2">
              <label className="block font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
                placeholder="e.g. Bangladesh"
              />
            </div>
          </div>

          {/* linkedIn */}
          <div>
            <label className="block font-medium mb-1">LinkedIn URL</label>
            <input
              type="url"
              name="linkedIn"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded "
              placeholder="LinkedIn url"
            />
          </div>

          {/* Motivation Message */}
          <div>
            <label className="block font-medium mb-1">
              Why do you want this internship?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Describe your interest and motivation..."
            ></textarea>
          </div>

          <div>
            <label className="label">
              <input
                type="checkbox"
                required
                className="checkbox checkbox-accent"
              />
              Accept terms & conditions
            </label>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ApplicationForm;

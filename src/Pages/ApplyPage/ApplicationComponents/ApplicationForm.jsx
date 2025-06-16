import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    domain: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // You can integrate backend/API submission logic here
    alert("Application submitted successfully!");
  };

  return (
    <div className="py-12  min-h-screen">
      <div className="max-w-3xl mx-auto  shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Internship Application Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Email */}
          <div>
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

          {/* Phone Number */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="e.g. 017XXXXXXXX"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block font-medium mb-1">Education</label>
            <input
              type="text"
              name="education"
              required
              value={formData.education}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="e.g. BSc in CSE, University Name"
            />
          </div>

          {/* Internship Domain */}
          <div>
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

          {/* Resume Upload */}
          <div>
            <label className="block font-medium mb-1">
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              name="resume"
              accept=".pdf"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded "
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
      </div>
    </div>
  );
};

export default ApplicationForm;

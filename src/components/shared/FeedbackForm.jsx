import React, { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    rating: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Feedback:", feedback);
    alert("Thanks for your feedback!");
    setFeedback({ name: "", rating: "", comments: "" });
  };

  return (
    <div className="bg-white rounded-xl max-w-xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        We Value Your Feedback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={feedback.name}
          onChange={handleChange}
          placeholder="Your Name (optional)"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <select
          name="rating"
          value={feedback.rating}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        >
          <option value="">Rate your experience</option>
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Good</option>
          <option value="3">⭐⭐⭐ Average</option>
          <option value="2">⭐⭐ Poor</option>
          <option value="1">⭐ Very Bad</option>
        </select>
        <textarea
          name="comments"
          value={feedback.comments}
          onChange={handleChange}
          rows="4"
          placeholder="Your comments or suggestions"
          className="w-full p-3 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 w-full"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

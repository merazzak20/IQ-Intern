import React, { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Loader from "./Loader";

const imageBB_hosting_key = import.meta.env.VITE_IMAGE_BB_API_KEY;
const image_upload = `https://api.imgbb.com/1/upload?key=${imageBB_hosting_key}`;

const FeedbackForm = () => {
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    university: "",
    rating: "",
    comments: "",
  });
  // console.log(feedback);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;
    const rating = form["rating-2"].value;
    const imageFile = form.img.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const { data } = await axiosPublic.post(image_upload, formData);
      const imgUrl = data.data.url;

      const feedData = {
        name: feedback.name,
        university: feedback.university,
        comments: feedback.comments,
        rating,
        image: imgUrl,
      };

      setLoader(false);
      toast.success("Feedback submission is successful.👍");
      setFeedback({ name: "", rating: "", university: "", comments: "" });
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-white rounded-xl max-w-xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        We Value Your Feedback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name */}
        <input
          type="text"
          name="name"
          value={feedback.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        {/* university */}
        <input
          type="text"
          name="university"
          value={feedback.university}
          onChange={handleChange}
          placeholder="Your University"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        {/* image */}
        <fieldset className="fieldset">
          <input
            type="file"
            name="img"
            required
            className="file-input file-input-[#007A88] w-full"
          />
          <label className="label">Max size 2MB</label>
        </fieldset>
        {/* comments */}
        <textarea
          name="comments"
          value={feedback.comments}
          onChange={handleChange}
          rows="4"
          placeholder="Your comments or suggestions"
          className="w-full p-3 border border-gray-300 rounded"
        />
        {/* Rating */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                value="1"
                className="mask mask-star-2 bg-[#9C2227]"
              />
              <input
                type="radio"
                name="rating-2"
                value="2"
                className="mask mask-star-2 bg-[#9C2227]"
              />
              <input
                type="radio"
                name="rating-2"
                value="3"
                className="mask mask-star-2 bg-[#9C2227]"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                value="4"
                className="mask mask-star-2 bg-[#9C2227]"
              />
              <input
                type="radio"
                name="rating-2"
                value="5"
                className="mask mask-star-2 bg-[#9C2227]"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#007A88] text-white py-3 px-6 rounded hover:bg-[#365e63] w-full"
        >
          {loader ? <Loader></Loader> : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

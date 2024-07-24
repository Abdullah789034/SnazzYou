import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axios.provider";

const SuggestedBody = () => {
  const { suggestionId } = useParams();
  const [suggestions, setSuggestions] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestionDetails = async () => {
      try {
        const response = await axiosInstance.get(
          `/v1/suggestions/${suggestionId}`
        );
        if (response.data.success) {
          setSuggestions(response.data.data.suggestion);
        } else {
          throw new Error("Failed to fetch suggestion details");
        }
      } catch (error) {
        console.error("Error fetching suggestion details:", error);
        navigate("/dashboard"); // Navigate to dashboard on error
      }
    };

    fetchSuggestionDetails();
  }, [suggestionId, navigate]);

  const handleSubmit = () => {
    navigate("/feedback");
  };

  if (!suggestions) {
    return <p>Loading...</p>; // or handle loading state
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-16 mx-3">
        Some Fashion Suggestions for you
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <SuggestedFeatures
          name="Style Suggestion"
          suggestion={suggestions.overAllStyle}
          image={
            suggestions?.overAllStyle?.image?.url ||
            "https://i.ibb.co/0D90mnF/Untitled-design-6.png"
          }
        />
        <SuggestedFeatures
          name="HairStyle / HairCut"
          suggestion={suggestions.hairStyle}
          image={
            suggestions?.hairStyle?.image?.url ||
            "https://i.ibb.co/ggqKWVX/Untitled-design-8.png"
          }
        />
        <SuggestedFeatures
          name="Top Wear"
          suggestion={suggestions.top}
          image={
            suggestions?.top?.image?.url ||
            "https://i.ibb.co/RvT7BP4/Untitled-design-7.png"
          }
        />
        <SuggestedFeatures
          name="Glasses"
          suggestion={suggestions.glasses}
          image={
            suggestions?.glasses?.image?.url ||
            "https://i.ibb.co/tLGTfCy/Untitled-design-5.png"
          }
        />
        <SuggestedFeatures
          name="Bottom Wear"
          suggestion={suggestions.bottom}
          image={
            suggestions?.bottom?.image?.url ||
            "https://i.ibb.co/zPPkfry/Untitled-design-9.png"
          }
        />
        <SuggestedFeatures
          name="Footwear"
          suggestion={suggestions.footwear}
          image={
            suggestions?.footwear?.image?.url ||
            "https://i.ibb.co/WP0bZFS/Untitled-design-10.png"
          }
        />
        {suggestions.jewelry && (
          <SuggestedFeatures
            name="Accesories"
            suggestion={suggestions.jewelry}
            image={
              suggestions?.jewelry?.image?.url ||
              "https://i.ibb.co/M7NC31V/Untitled-design-12.png"
            }
          />
        )}
      </div>
      <div className="flex float-right mr-10">
        <button
          className="bg-transparent text-white border-white border-2 px-6 py-3 mt-6 rounded shadow-sm hover:bg-white hover:text-black duration-150 font-semibold"
          onClick={handleSubmit}
        >
          Give Feedback ➔
        </button>
      </div>
    </>
  );
};

const SuggestedFeatures = ({ suggestion, image, name }) => {
  return (
    <div className="flex flex-col justify-between p-5 border-2 border-white w-80 rounded-lg items-center">
      <h2 className="text-3xl font-semibold underline">{name}</h2>
      <img
        src={image}
        alt="face image"
        className="w-64 h-64 object-cover rounded-lg my-5"
      />
      <h3 className="font-semibold text-2xl p-2 align-middle text-center">
        {suggestion?.name}
      </h3>
      {suggestion?.reasons?.map((detail, index) => (
        <p key={index} className="w-full m-1">
          ➤ {detail}
        </p>
      ))}
      <DetailsDropDown details={suggestion?.description} />
    </div>
  );
};

const DetailsDropDown = ({ details }) => {
  return (
    <div className="collapse">
      <input type="checkbox" />
      <div className="collapse-title text-lg font-medium underline">
        Details ⌵
      </div>
      <div className="collapse-content">
        {details?.map((detail, i) => (
          <p key={i} className="text-sm">
            • {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SuggestedBody;

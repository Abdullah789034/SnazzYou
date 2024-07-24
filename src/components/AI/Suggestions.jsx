import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Suggestions = () => {
  const location = useLocation();
  const [suggestions] = useState(location?.state?.suggestion);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(suggestions);
    if (!suggestions) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = () => {
    navigate("/feedback");
  };

  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-16 mx-3">
        Some Fashion Suggestions for you
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <SuggestedFeatures
          name="Style Suggestion"
          suggestion={suggestions?.overAllStyle}
          image={
            suggestions?.image ||
            "https://i.ibb.co/0D90mnF/Untitled-design-6.png"
          }
        />
        <SuggestedFeatures
          name="HairStyle / HairCut"
          suggestion={suggestions?.hairStyle}
          image="https://i.ibb.co/ggqKWVX/Untitled-design-8.png"
        />
        <SuggestedFeatures
          name="Top Wear"
          suggestion={suggestions?.top}
          image="https://i.ibb.co/RvT7BP4/Untitled-design-7.png"
        />
        <SuggestedFeatures
          name="Glasses"
          suggestion={suggestions?.glasses}
          image="https://i.ibb.co/tLGTfCy/Untitled-design-5.png"
        />
        <SuggestedFeatures
          name="Bottom Wear"
          suggestion={suggestions?.bottom}
          image="https://i.ibb.co/zPPkfry/Untitled-design-9.png"
        />
        <SuggestedFeatures
          name="Footwear"
          suggestion={suggestions?.footwear}
          image="https://i.ibb.co/WP0bZFS/Untitled-design-10.png"
        />
        {suggestions?.jewelry && (
          <SuggestedFeatures
            name="Accesories"
            suggestion={suggestions?.jewelry}
            image="https://i.ibb.co/M7NC31V/Untitled-design-12.png"
          />
        )}
      </div>
      <div className="flex float-right mr-10">
        <button
          className="bg-transparent text-white border-white border-2 px-6 py-3 mt-6 rounded shadow-sm hover:bg-white hover:text-black duration-150 font-semibold"
          onClick={handleSubmit}
        >
          Give Feedback ➔
        </button>{" "}
      </div>
    </>
  );
};

const SuggestedFeatures = ({ suggestion, image, name }) => {
  return (
    <>
      <div className="flex flex-col justify-between p-5 border-2 border-white w-80 rounded-lg items-center">
        <h2 className="text-3xl font-semibold underline">{name}</h2>
        <img src={image} alt="face image" width={200} />
        <h3 className="font-semibold text-2xl p-2 align-middle text-center">
          {suggestion?.name}
        </h3>
        {suggestion?.reasons?.map((detail, index) => {
          return (
            <p key={index} className="w-full m-1">
              ➤ {detail}
            </p>
          );
        })}
        <DetailsDropDown details={suggestion?.description} />
      </div>
    </>
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
        {details?.map((detail, i) => {
          return (
            <p key={i} className="text-sm">
              • {detail}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Suggestions;

//IMages
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/XzC0kbF/Untitled-design-11.png" alt="Untitled-design-11" border="0"></a>
{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/WP0bZFS/Untitled-design-10.png" alt="Untitled-design-10" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/zPPkfry/Untitled-design-9.png" alt="Untitled-design-9" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/ggqKWVX/Untitled-design-8.png" alt="Untitled-design-8" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/RvT7BP4/Untitled-design-7.png" alt="Untitled-design-7" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/0D90mnF/Untitled-design-6.png" alt="Untitled-design-6" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/tLGTfCy/Untitled-design-5.png" alt="Untitled-design-5" border="0"></a> */
}
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/M7NC31V/Untitled-design-12.png" alt="Untitled-design-12" border="0"></a>

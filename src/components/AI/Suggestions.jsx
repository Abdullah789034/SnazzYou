import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const suggestions = {
  overAllStyle: {
    name: "Smart Casual",
    reasons: [
      "This style is perfect for a young adult like yourself.",
      "It is a versatile style that can be dressed up or down.",
      "It will give off a professional yet stylish vibe.",
    ],
    description: [
      "Smart casual is a combination of formal and casual attire.",
      "It usually consists of well-fitted pants or chinos paired with a button-down shirt or polo.",
      "You can add a blazer or jacket for a more polished look.",
      "This style is suitable for both work and social events.",
    ],
  },
  hairStyle: {
    name: "Side Part with Light Stubble",
    reasons: [
      "This hairstyle will complement your oval face shape and wavy hair.",
      "The side part will add volume and definition to your hair.",
      "The light stubble will add a rugged and masculine touch to your overall look.",
    ],
    description: [
      "To achieve this hairstyle, ask your barber for a side part with a slight taper on the sides and back.",
      "You can use a styling product like wax or pomade to keep your hair in place.",
      "For the light stubble, make sure to trim it regularly and keep it evenly distributed.",
    ],
  },
  glasses: {
    name: "Round Frame Glasses",
    reasons: [
      "Round frames will soften the angles of your face and complement your oval face shape.",
      "They will also add a trendy and stylish touch to your overall look.",
    ],
    description: [
      "When choosing round frame glasses, make sure they fit your face properly.",
      "You can also opt for a tortoiseshell or metal frame for a more unique look.",
      "Make sure to clean your glasses regularly to keep them looking sharp.",
    ],
  },
  top: {
    name: "Button-Down Shirt",
    reasons: [
      "A button-down shirt is a classic and versatile piece that can be dressed up or down.",
      "It will give off a professional and put-together look.",
      "It will also complement your broad shoulders and muscular build.",
    ],
    description: [
      "Choose a well-fitted button-down shirt in a solid color or subtle pattern.",
      "You can pair it with chinos or dress pants for a more formal look, or with jeans for a casual look.",
      "Make sure to iron or steam your shirt for a crisp and clean appearance.",
    ],
  },
  bottom: {
    name: "Chinos",
    reasons: [
      "Chinos are a great alternative to jeans and will add a touch of sophistication to your look.",
      "They will also complement your athletic build and narrow waist.",
      "You can easily dress them up or down depending on the occasion.",
    ],
    description: [
      "Choose a pair of well-fitted chinos in a neutral color like khaki, navy, or gray.",
      "You can pair them with a button-down shirt and dress shoes for a more formal look, or with a t-shirt and sneakers for a casual look.",
      "Make sure to iron or steam your chinos for a polished appearance.",
    ],
  },
  footwear: {
    name: "Leather Dress Shoes",
    reasons: [
      "A pair of leather dress shoes will complete your smart casual look.",
      "They will add a touch of sophistication and elevate your style.",
      "They will also complement your overall build and height.",
    ],
    description: [
      "Choose a pair of well-crafted leather dress shoes in a classic style like oxfords or loafers.",
      "Make sure they fit your feet comfortably and are appropriate for the occasion.",
      "Keep them clean and polished for a sharp and put-together look.",
    ],
  },
  jewelary: {
    name: "Watch",
    reasons: [
      "A watch is a timeless and functional accessory that will add a touch of elegance to your style.",
      "It will also complement your overall look and personality.",
      "Choose a watch with a classic design and a leather or metal strap.",
    ],
    description: [
      "Make sure the watch fits your wrist comfortably and is appropriate for the occasion.",
      "You can opt for a simple and sleek design for a more formal look, or a bold and statement piece for a more casual look.",
      "Keep the watch clean and well-maintained for a polished appearance.",
    ],
  },
};

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

  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-16 mx-3">
        Some Fashion Suggestions for you
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <SuggestedFeatures
          name="Style Suggestion"
          suggestion={suggestions?.overAllStyle}
          image="https://i.ibb.co/0D90mnF/Untitled-design-6.png"
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

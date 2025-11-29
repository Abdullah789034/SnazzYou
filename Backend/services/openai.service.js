const OpenAI = require("openai");
const prompts = require("../utils/prompts");
const gis = require("async-g-i-s");

require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyseImage(imageAddresses) {
  const content = [
    {
      type: "text",
      text: JSON.stringify(prompts.analysisPrompt),
    },
  ];
  for (const image of imageAddresses) {
    content.push({
      type: "image_url",
      image_url: {
        url: image,
        detail: "low",
      },
    });
  }

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    response_format: { type: "json_object" },
    temperature: 0.5,
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content,
      },
    ],
  });
  if (!response?.choices[0]?.message?.content) {
    return null;
  }
  return JSON.parse(response.choices[0].message.content);
}

async function suggestStyle(analysisJson) {
  const prompt = prompts.suggestionPrompt;
  prompt.userAnalysis = analysisJson;
  // console.log(JSON.stringify(prompt));

  const completion = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: JSON.stringify(prompt),
    max_tokens: 2000,
    temperature: 0.5,
  });
  if (!completion?.choices[0]?.text) {
    return null;
  }

  const obj = JSON.parse(completion.choices[0].text);
  const imageSearchPromises = Object.keys(obj).map((key) => {
    return searchImage(
      `${obj[key].name} ${analysisJson.userDemographic.gender}`
    );
  });
  const imageResults = await Promise.all(imageSearchPromises);
  Object.keys(obj).forEach((key, index) => {
    obj[key].image = imageResults[index];
  });
  console.log(obj);
  return obj;
}

const searchImage = async (query) => {
  const results = await gis(query);
  return results[0];
};
// (async () => {
//   console.log(
//     await analyseImage(
//       "https://i.ibb.co/pXPsRPB/Whats-App-Image-2024-06-28-at-00-00-56-27f26376.jpg"
//     )
//   );
// })();
// (async () => {
//   console.log(
//     await analyseImage([
//       "https://i.ibb.co/18h7xHh/Screenshot-2024-07-06-220237.png",
//       "https://i.ibb.co/WzvPRJr/Screenshot-2024-07-06-220244.png",
//     ])
//   );
// })();
// (async () => {
//   console.log(
//     await suggestStyle({
//       demographic: {
//         gender: "male",
//         region: "Pakistan, punjab",
//         weather: "summer 38C"
//       },
//       face: {
//         type: "oval",
//         details: [
//           "The face has balanced proportions with a slightly wider forehead than the chin.",
//           "Eyes are moderately spaced apart and appear to be of medium size.",
//           "Lips are of average fullness and well-defined.",
//           "Jawline is gently rounded without sharp angles.",
//           "Cheekbones are prominent but not overly wide.",
//         ],
//       },
//       hair: {
//         type: "short and straight",
//         details: [
//           "Hair is neatly trimmed and styled, with a slight upward lift at the front.",
//           "Facial hair is minimal, with a clean-shaven appearance.",
//         ],
//       },
//       body: {
//         type: "mesomorph",
//         details: [
//           "The body has a naturally athletic build with broad shoulders and a narrow waist.",
//           "Arms and legs are well-proportioned and muscular.",
//           "Torso appears to be of average length with a balanced upper and lower body.",
//         ],
//       },
//       all: "The individual has an oval-shaped face with balanced proportions, moderately spaced medium-sized eyes, average fullness lips, a gently rounded jawline, and prominent but not overly wide cheekbones. The hair is short, straight, and neatly styled with a slight upward lift at the front, and the facial hair is minimal with a clean-shaven appearance. The body type is mesomorph with a naturally athletic build, broad shoulders, a narrow waist, and well-proportioned muscular arms and legs. The torso is of average length with a balanced upper and lower body.",
//     })
//   );
// })();

module.exports = {
  analyseImage,
  suggestStyle,
};

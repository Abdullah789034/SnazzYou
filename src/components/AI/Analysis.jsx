import { useEffect, useState } from "react";
import Loading from "../Loading";
import axiosInstance from "../../api/axios.provider";
import { useLocation, useNavigate } from "react-router-dom";

const Analysis = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [analysis, setAnalysis] = useState(location?.state?.analysis);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!analysis) {
      navigate("/dashboard");
      alert('Analysis not done due to some error');
    }
  }, []);

  const getSuggestion = async () => {
    setLoading(true);
    const response = await axiosInstance.get("/v1/suggestions/general");
    console.log(response.data);
    if (response.data.success) {
      navigate(`/suggestions/${response.data.data?._id}`);
    }
    //suggestions/66a1500e94953bc9e8341908
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="text-4xl font-semibold text-center my-7">
            Analysis Bases on your Images
          </h1>
          <p className="md:w-[60%] w-[80%] m-auto my-7 text-center">
            {analysis?.all}
          </p>
          <div className="flex gap-6 flex-wrap justify-center mb-16 md:mb-2">
            <AnalyzedFeature
              name={"Face"}
              analysis={analysis?.face}
              image={"https://i.ibb.co/KDpp44R/Untitled-design-2.png"}
            />
            <AnalyzedFeature
              name={"Hair"}
              analysis={analysis?.hair}
              image={"https://i.ibb.co/Fzrj00d/Untitled-design-3.png"}
            />
            <AnalyzedFeature
              name={"Physique"}
              analysis={analysis?.body}
              image={"https://i.ibb.co/r5zzvWr/Untitled-design-4.png"}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={getSuggestion}
              className="p-3 px-5 bg-white text-black md:my-4 font-bold md:static md:w-fit md:mx-auto  md:text-xl md:rounded-lg fixed m-0 rounded-none bottom-0 w-full"
            >
              Get Suggestion
            </button>
          </div>
        </>
      )}
    </>
  );
};

const AnalyzedFeature = ({ analysis, image, name }) => {
  return (
    <>
      <div className="flex flex-col justify-between p-5 border-2 border-white w-80 rounded-lg items-center">
        <h2 className="text-3xl font-semibold underline">{name}</h2>
        <img src={image} alt="face image" width={200} />
        <h3 className="font-semibold text-2xl p-2 align-middle text-center">
          {analysis?.type}
        </h3>
        {analysis?.details?.map((detail, index) => {
          return (
            <p key={index} className="w-full m-1">
              ➤ {detail}
            </p>
          );
        })}
      </div>
    </>
  );
};
export default Analysis;

// face - https://i.ibb.co/KDpp44R/Untitled-design-2.png
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/Fzrj00d/Untitled-design-3.png" alt="Untitled-design-3" border="0"></a>
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/Fzrj00d/Untitled-design-3.png" alt="Untitled-design-3" border="0"></a><a href="https://imgbb.com/"><img src="https://i.ibb.co/r5zzvWr/Untitled-design-4.png" alt="Untitled-design-4" border="0"></a>

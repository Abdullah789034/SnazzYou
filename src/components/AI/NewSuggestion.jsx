import { useEffect } from "react";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axios.provider";

const NewSuggestions = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axiosInstance.get("/v1/suggestions/general");
        if (response.data.success) {
          navigate(`/suggestions/${response.data.data._id}`);
        } else {
          throw new Error("Failed to fetch suggestions");
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <>
      <Loading />
    </>
  );
};

export default NewSuggestions;

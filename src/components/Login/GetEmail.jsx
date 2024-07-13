import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import arrow from "../../assets/images/arrow-right-white.png";
import axiosInstance from "../../api/axios.provider";

// Define the validation schema
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const GetEmail = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: userData.email || "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const response = await axiosInstance.post(`/v1/auth/email-check`, {
        email: values.email,
      });
      console.log(response.data);
      if (!response.data.success) {
        formik.errors.email = response.data.error.message;

        setTimeout(() => {
          formik.errors.email = "";
        }, 5000);
        setLoading(false);

        return;
      }
      setUserData({ ...userData, email: values.email });
      navigate("/register/date-region");
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] min-w-screen">
      <p className="text-4xl mt-4 p-2">Write your email?</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-[80vw]"
      >
        <div className="flex items-center mt-4 w-full border-b-2 border-white">
          <input
            type="text"
            name="email"
            placeholder="hassan@snazzyou.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 text-md md:text-xl text-center w-full bg-transparent text-white focus:outline-none"
          />
          {!isLoading ? (
            <button type="submit" className="ml-2 p-2">
              <img src={arrow} alt="Submit" className="h-4" />
            </button>
          ) : (
            <svg
              className="animate-spin h-6 w-6 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.005 8.005 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm13-2.647l3 2.647C23.865 17.824 25 15.042 25 12h-4a8.005 8.005 0 01-3 5.291z"
              ></path>
            </svg>
          )}
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 mt-2">{formik.errors.email}</p>
        ) : null}
      </form>
    </div>
  );
};

export default GetEmail;

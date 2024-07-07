import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import arrow from "../../assets/images/arrow-right-white.png";
import axiosInstance from "../../api/axios.provider";

// Define the validation schema
const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const GetPassword = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true); // Set loading to true when submitting
      try {
        const finalData = { ...userData, password: values.password };
        console.log(finalData);
        const response = await axiosInstance.post(
          `/v1/auth/register`,
          finalData
        );
        if (!response.data.success) {
          return console.error(response.data.error);
        }
        localStorage.setItem("jwt-token", response.data.token);
        navigate("/");
      } catch (error) {
        console.error("Error submitting data:", error);
        // Handle the error accordingly
      } finally {
        setIsLoading(false); // Set loading back to false after API call completes
      }
    },
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] min-w-screen px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-full max-w-lg"
      >
        <p className="text-2xl md:text-4xl mt-4 p-2 text-center">
          Create a Password
        </p>

        <div className="flex gap-4 items-center justify-center w-full">
          <p className="text-2xl md:text-4xl mt-4 p-2 w-full">Password</p>
          <div className="flex items-center mt-4 w-full border-b-2 border-white">
            <input
              type={formik.values.showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
            />
            <button
              type="button"
              onClick={() =>
                formik.setFieldValue(
                  "showPassword",
                  !formik.values.showPassword
                )
              }
              className="p-2 text-white"
            >
              {formik.values.showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 mt-2">{formik.errors.password}</p>
        ) : null}

        <div className="flex gap-4 items-center justify-center w-full mt-4">
          <p className="text-2xl md:text-4xl mt-4 p-2 w-full">
            Confirm Password
          </p>
          <div className="flex items-center mt-4 w-full border-b-2 border-white">
            <input
              type={formik.values.showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className="text-red-500 mt-2">{formik.errors.confirmPassword}</p>
        ) : null}
        {/* Loading indicator */}
        {isLoading && <p className="text-white mt-4">Loading...</p>}

        <button type="submit" className="mt-4 p-4" disabled={isLoading}>
          {!isLoading ? (
            <img src={arrow} alt="Submit" className="h-6" />
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
        </button>
      </form>
    </div>
  );
};

export default GetPassword;

import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import arrow from "../../assets/images/arrow-right-white.png";

// Define the validation schema
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
});

const GetName = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      name: userData.name || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserData({ ...userData, name: values.name });
      navigate("/register/email");
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] min-w-screen">
      <p className="text-4xl mt-4 p-2">What is your name?</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-[80vw]"
      >
        <div className="flex items-center mt-4 w-full border-b-2 border-white">
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 text-md md:text-xl text-center w-full bg-transparent text-white focus:outline-none"
          />
          <button
            type="submit"
            className="ml-2 p-2 hover:scale-125 duration-200"
          >
            <img src={arrow} alt="Submit" className="h-4" />
          </button>
        </div>
        {formik.touched.name && formik.errors.name ? (
          <p className="text-red-500 mt-2">{formik.errors.name}</p>
        ) : null}
      </form>
    </div>
  );
};

export default GetName;

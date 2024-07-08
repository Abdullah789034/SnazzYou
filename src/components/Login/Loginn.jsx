import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/arrow-right-white.png";
import axiosInstance from "../../api/axios.provider";

// Define validation schema
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt-token") || null;
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post("/v1/auth/login", {
          email: values.email,
          password: values.password,
        });
        if (!response.data.success) {
          formik.errors.password = response.data.error.message;
          return;
        }
        const token = response.data.token;
        localStorage.setItem("jwt-token", token);
        navigate("/");
      } catch (error) {
        console.error("Error logging in:", error);
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-full max-w-lg"
      >
        <p className="text-2xl md:text-4xl mt-4 p-2 text-center">Login</p>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
          <label
            htmlFor="email"
            className="text-2xl md:text-4xl mt-4 p-2 w-full md:w-1/4"
          >
            Email
          </label>
          <div className="flex items-center mt-4 w-full md:w-3/4 border-b-2 border-white">
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 mt-2 text-center">{formik.errors.email}</p>
        ) : null}

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full mt-4">
          <label
            htmlFor="password"
            className="text-2xl md:text-4xl mt-4 p-2 w-full md:w-1/4"
          >
            Password
          </label>
          <div className="flex items-center mt-4 w-full md:w-3/4 border-b-2 border-white">
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 mt-2 text-center">
            {formik.errors.password}
          </p>
        ) : null}

        <button type="submit" className="mt-4 p-4">
          <img src={arrow} alt="Submit" className="h-6" />
        </button>
      </form>
    </div>
  );
};

export default Login;

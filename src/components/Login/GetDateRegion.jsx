import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import arrow from "../../assets/images/arrow-right-white.png";

// Define the validation schema
const validationSchema = yup.object({
  birthDate: yup.date().required("Birth date is required").nullable(),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
});

const GetDateRegion = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      birthDate: userData.dateOfBirth || "",
      country: userData.region?.country || "",
      city: userData.region?.city || "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserData({
        ...userData,
        dateOfBirth: new Date(values.birthDate).toISOString(),
        region: { country: values.country, city: values.city },
      });
      navigate("/register/gender");
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center w-full max-w-lg"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
          <p className="text-2xl md:text-4xl mt-4 p-2 text-center">
            When were you born?
          </p>
          <div className="flex items-center mt-4 w-full md:w-1/2 border-b-2 border-white">
            <input
              type="date"
              name="birthDate"
              value={formik.values.birthDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
        {formik.touched.birthDate && formik.errors.birthDate ? (
          <p className="text-red-500 mt-2">{formik.errors.birthDate}</p>
        ) : null}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full mt-4">
          <p className="text-2xl md:text-4xl p-2 text-center">
            What is your region?
          </p>
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex items-center border-b-2 border-white">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
              />
            </div>
            {formik.touched.country && formik.errors.country ? (
              <p className="text-red-500 mt-2">{formik.errors.country}</p>
            ) : null}
            <div className="flex items-center border-b-2 border-white mt-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-2 text-xl md:text-2xl text-center w-full bg-transparent text-white focus:outline-none"
              />
            </div>
            {formik.touched.city && formik.errors.city ? (
              <p className="text-red-500 mt-2">{formik.errors.city}</p>
            ) : null}
          </div>
        </div>
        <button type="submit" className="mt-4 p-4">
          <img src={arrow} alt="Submit" className="h-6" />
        </button>
      </form>
    </div>
  );
};

export default GetDateRegion;

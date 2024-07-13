import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import arrow from '../../assets/images/arrow-right-white.png';

// Define the validation schema
const validationSchema = yup.object({
    gender: yup.string().required('Gender is required'),
});

const GetGender = () => {
    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            gender: userData.gender || '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setUserData({ ...userData, gender: values.gender });
            navigate('/register/password');
        },
    });

    return (
        <div className='flex flex-col items-center justify-center min-h-screen min-w-screen px-4'>
            <form onSubmit={formik.handleSubmit} className='flex flex-col items-center w-full max-w-lg'>
                <p className='text-2xl md:text-4xl mt-4 p-2 text-center'>What is your Gender?</p>
                <div className='flex flex-wrap items-center justify-center mt-4 gap-2'>
                    {['Male', 'Female', 'Other'].map((g) => (
                        <div
                            key={g}
                            className={`p-4 m-2 cursor-pointer ${formik.values.gender === g ? 'bg-white text-black' : 'bg-transparent text-white'
                                } border-2 border-white`}
                            onClick={() => formik.setFieldValue('gender', g)}
                        >
                            {g}
                        </div>
                    ))}
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                    <p className='text-red-500 mt-2'>{formik.errors.gender}</p>
                ) : null}
                <button type='submit' className='mt-4 p-4'>
                    <img src={arrow} alt="Submit" className='h-6' />
                </button>
            </form>
        </div>
    );
};

export default GetGender;

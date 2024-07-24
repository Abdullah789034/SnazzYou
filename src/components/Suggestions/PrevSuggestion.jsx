import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Suggested from './Suggested';
import axiosInstance from "../../api/axios.provider";

const PrevSuggestion = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axiosInstance.get("/v1/suggestions");
                if (response.data.success) {
                    setSuggestions(response.data.suggestions);
                } else {
                    throw new Error("Failed to fetch suggestions");
                }
            } catch (error) {
                console.error("Error fetching suggestions:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSuggestions();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const isLoopEnabled = suggestions.length > 3;

    const handleSuggestionClick = (id) => {
        navigate(`/suggestions/${id}`);
    };

    return (
        <>
            <div>
                <p className='text-3xl p-4 font-semibold'>Previous Suggestions</p>
            </div>
            <div className='mt-5'>
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={isLoopEnabled}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            centeredSlides: false,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            centeredSlides: false,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            centeredSlides: false,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {suggestions.map((suggestion, index) => (
                        <SwiperSlide key={index} onClick={() => handleSuggestionClick(suggestion._id)}>
                            <Suggested
                                title={suggestion.suggestion.overAllStyle.name}
                                date={new Date(suggestion.createdAt).toLocaleDateString()}
                                description={suggestion.suggestion.overAllStyle.description.join(' ')}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default PrevSuggestion;

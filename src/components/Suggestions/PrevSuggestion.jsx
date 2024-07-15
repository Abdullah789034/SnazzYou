import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import Suggested from './Suggested';

const PrevSuggestion = () => {
    const previousSuggestions = [
        {
            title: 'Stylish Summer Outfit',
            date: '2024-07-01',
            description: 'A cool and comfortable summer outfit perfect for sunny days.',
        },
        {
            title: 'Winter Wardrobe Essentials',
            date: '2024-01-15',
            description: 'Essential items for staying warm and stylish during the winter months.',
        },
        {
            title: 'Spring Fashion Tips',
            date: '2024-03-20',
            description: 'Fresh fashion ideas for a vibrant and stylish spring season.',
        },
        {
            title: 'Autumn Attire',
            date: '2024-09-10',
            description: 'Perfect outfits to embrace the autumn vibes.',
        },
        {
            title: 'Casual Wear',
            date: '2024-06-05',
            description: 'Everyday casual wear that combines comfort and style.',
        },
        {
            title: 'Formal Look',
            date: '2024-05-25',
            description: 'Formal attire for business and special events.',
        },
        // Add more suggestions as needed
    ];

    return (
        <>
            <div>
                <p className='text-2xl'>Previous Suggestion</p>
            </div>
            <div className='mt-5'>

                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={true}
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
                    {previousSuggestions.map((suggestion, index) => (
                        <SwiperSlide key={index}>
                            <Suggested
                                title={suggestion.title}
                                date={suggestion.date}
                                description={suggestion.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
};

export default PrevSuggestion;

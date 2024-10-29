"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { IoStatsChartOutline } from "react-icons/io5";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import hammed from "../../../asset/client/hammed.jpg";
import Bee from "../../../asset/client/bee_binite.jpeg";
import jordan from "../../../asset/client/jordan.jpg";
import user from "../../../asset/user.png";
import { FaStar } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { PiQuotes } from "react-icons/pi";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`md:top-0 md:-mt-[5rem] xl:block hidden cursor-pointer right-3 xl:right-5 top-[50%] bg-primary-white text-primary-black w-10 h-10 rounded-full absolute z-20 p-[3px] md:flex items-center justify-center transition-all duration-200 ease-linear`}
            onClick={onClick}
        >
            <IoIosArrowRoundForward
                size={35}
                className="transition-all duration-200 ease-linear"
            />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer xl:block hidden xl:left-[91%] md:-mt-[5rem] md:top-0 right-16 top-[50%] absolute z-20 p-[3px] bg-primary-white text-primary-black w-10 h-10 rounded-full md:flex items-center justify-center transition-all duration-200 ease-linear`}
            onClick={onClick}
        >
            <IoIosArrowRoundBack
                size={35}
                className="transition-all duration-200 ease-linear"
            />
        </div>
    );
}

const Cards = () => {
    const data = [
        {
            id: 1,
            title: 'Hammed Odulana',
            image: hammed,
            country: 'Nigeria',
            description: 'Hamza delivered a beautiful and responsive website for our business. He was quick, professional, and really understood our vision. Highly recommend!'
        },
        {
            id: 2,
            title: 'Bee Binite',
            image: Bee,
            country: 'United Kingdom',
            description: 'Hamza built a custom admin dashboard for us, and it’s exactly what we needed. Clean design, smooth performance, and completed on time.'
        },
        {
            id: 3,
            title: 'Jordan',
            image: jordan,
            country: 'Ghana',
            description: 'He revamped our website with Next.js, making it faster and more user-friendly. Great communication and quality work.'
        },
        {
            id: 4,
            title: 'Rafael Franco',
            country: 'Spain',
            description: 'Hamza built a fantastic, responsive site for us—fast, reliable, and exactly what we needed!'
        },
        {
            id: 5,
            title: 'Felipe Bizger',
            country: 'Indonesia',
            description: 'Quick, professional, and delivered a great admin dashboard. Highly recommend!'
        },
        {
            id: 6,
            title: 'Russel Ruiz',
            country: 'USA',
            description: 'Hamza did an amazing job on our website redesign. Very pleased with the results!'
        },
    ];

    const settings = {
        dots: false,
        dotsClass: "slick-dots line-indicator",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    infinite: true,
                    dots: false,
                    
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                },
            },
        ],
        customPaging: (i) => <div className="mt-3 text-xs opacity-0">{i}</div>,
    };

    return (
        <div className="mt-10 xl:mt-20 w-full">
            <Slider {...settings} className="w-full">
                {data.map((e) => (
                    <div
                        key={e.id}
                        className="flex relative text-center mx-auto w-[390px] h-[340px] cursor-pointer flex-col rounded-xl py-5 px-4 md:px-6 bg-primary-gray text-primary-gray justify-center items-center"
                    >
                        <div className="flex gap-4 items-start justify-start">
                            {e.image ? (
                                <Image src={e.image} alt={e.title} width={1080} height={1080} className="w-[50px] h-[50px] rounded-full object-cover" />
                            ) : (
                                <Image src={user} alt="Default User Icon" width={1080} height={1080} className="w-[50px] h-[50px] rounded-full object-cover" />
                            )}
                            <div className="flex flex-col justify-start items-start">
                                <h2 className="text-primary-white font-semibold text-[22px]">{e.title}</h2>
                                <p className="text-primary-white/30">{e.country}</p>
                            </div>
                        </div>
                        <p className="pt-6 text-primary-white text-left text-xl font-light ">{e.description}</p>

                        {/* Shimmering 5-star rating */}
                        <div className="absolute bottom-6 w-full">
                            <div className="flex justify-between items-center w-full">
                                <div className="flex items-center">

                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index} className="text-primary-green text-xl shimmer-star">
                                        <TiStarFullOutline />

                                    </span>
                                ))}
                                </div>
                                <PiQuotes size={24} />
                            </div>

                        </div>
                    </div>
                ))}
            </Slider>
            <style jsx>{`
                .shimmer-star {
                    animation: shimmer 1.5s infinite;
                }

                @keyframes shimmer {
                    0% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </div>
    );
};

export default Cards;

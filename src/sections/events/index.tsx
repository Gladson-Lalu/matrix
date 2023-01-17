import React, { useEffect, useState } from 'react';
import "./style.css";
import Slider from 'react-slick';

import styled from 'styled-components';
import image1 from '../../assets/images/events/1.jpg';
import image2 from '../../assets/images/events/2.jpg';
import image3 from '../../assets/images/events/3.jpg';
import image4 from '../../assets/images/events/4.jpg';
import { motion } from 'framer-motion';


const EventSection = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const events = [
        {
            title: 'Robotics Workshop',
            image: image1,
            description: 'Learn about the latest advancements in the Internet of Things (IoT) technology. This hands-on workshop will cover topics such as sensor networks, device connectivity, and robotics. Get a chance to work with industry-standard tools and develop your own IoT project.',
        },
        {
            title: 'Campfire',
            image: image3,
            description: ' Join us for a night under the stars and enjoy the warmth of a campfire. This event will feature live music, storytelling, and games. Bring your friends and marshmallows for a fun and relaxing night.',

        }
        , {
            title: 'Candle Light Dinner',
            image: image4,
            description: 'Treat yourself to a romantic candlelight dinner. Enjoy a delicious meal and live music in a beautiful setting. Dress to impress and make memories with your loved ones.',
        },
        {
            title: 'Musical Fusion',
            image: image2,
            description: 'Experience the fusion of different music styles and instruments. This event will feature performances by talented musicians who will blend traditional and modern music to create something new and unique. Come and enjoy the show!',
        }
    ];

    const settings = {
        centerPadding: '0px',
        className: "center",
        infinite: true,
        dots: true,
        dotsColor: 'red',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 0,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '0px',
                    className: "center",
                    slidesToShow: 3,
                    centerMode: true,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: (_current: number, next: number) => setCurrentSlide(next),
    };

    const [isHovered, setIsHovered] = useState(false);


    return (
        //fade in animation
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 1 }}>
            <EventSectionClass id='events'>
                <EventTitle>Events</EventTitle>
                <Slider {...settings} >
                    {events.map((event, index) => (
                        <Card key={index} className={index === currentSlide ? 'activeSlide' : 'slide'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <Image style={
                                {
                                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)), url(${event.image})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }
                            } />

                            <CardContent className={index == currentSlide && (isHovered || window.innerWidth < 768) ? 'visible' : 'hidden'
                            }>
                                {event.description}
                            </CardContent>
                            <CardTitle >{event.title}</CardTitle>
                        </Card>
                    ))}
                </Slider>

            </EventSectionClass >
        </motion.div >
    );
};

const EventSectionClass = styled.div`
 width:  70vw;
 margin: 0 auto;
 margin-top: 200px;
 @media (max-width: 768px) {
    width: 85vw;
    }
    `;

const Image = styled.div`
    height: 30rem;
    object-fit: cover;
    `;

const Card = styled.div`
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    object-fit: cover;
    padding: 0;
    `;

const CardContent = styled.div`
    position: absolute;
    height: 170px;
    font-weight: 100;
    color: #fff;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    bottom: 0;
    left: 0;
    margin: 0 0;
    font-size: .85rem;
    line-height: 1.3rem;
    background: linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.99));
    padding: 1rem;
    @media (max-width: 768px) {
        visibility: visible;
        height: 200px;
        padding: 10px 20px;
        line-height: 1.4rem;
        font-size: .9rem;
        font-weight: 300;
        transition: none !important;
    }
    `;

const CardTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.5rem;
    font-weight: 800;
    text-align: center;
    line-height: 1.8rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
    `;


const EventTitle = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
        margin-bottom: 3rem;
    }
    `;



export default EventSection;
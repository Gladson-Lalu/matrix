import React, { useState } from 'react';
import "./style.css";
import Slider from 'react-slick';

import styled from 'styled-components';
import image1 from '../../assets/images/events/1.jpg';
import image2 from '../../assets/images/events/2.jpg';
import image3 from '../../assets/images/events/3.jpg';
import image4 from '../../assets/images/events/4.jpg';


const EventSection = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

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

    const images = [image1, image2, image3, image4];
    const [isHovered, setIsHovered] = useState(false);
    return (
        <EventSectionClass>
            <EventTitle>Events</EventTitle>
            <Slider {...settings}>
                {images.map((image, index) => (
                    //card content section should only be visible when the card is hovered and cardTitle should be visible when not hovered
                    <Card key={index} className={index === currentSlide ? 'activeSlide' : 'slide'} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <Image style={
                            {
                                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.73)), url(${image})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }
                        } />

                        <CardContent className={index == currentSlide && isHovered ? 'visible' : 'hidden'}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ad nisi magni vel a magnam maiores nulla numquam, eum qui.
                        </CardContent>
                        <CardTitle > Event {index + 1}</CardTitle>
                    </Card>
                ))}
            </Slider>

        </EventSectionClass >
    );
};

const EventSectionClass = styled.div`
 width:  60vw;
 margin: 150px auto;
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
 
    height: 150px;
    font-weight: 200;
    width: 100%;
    bottom: 0;
    left: 0;
    margin: 0 0;
    font-size: .9rem;
    line-height: 1rem;
    background: linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.788));
    padding: 1rem;
    `;

const CardTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    `;


const EventTitle = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    `;


export default EventSection;
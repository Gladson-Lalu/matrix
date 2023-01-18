import styled from "styled-components";
import { AppColor } from "../../constants/app_color";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function OverviewSection() {
    const navigate = useNavigate();
    return (
        <OverviewWrapper id={'overview'}>
            <OverviewTitle>What’s MATRIX?</OverviewTitle>
            <OverviewDescription>
                The workshop will cover a variety of topics, including:
                <OverviewList>
                    <li>Overview of Robotics</li>
                    <li>Robotics Hardware and Software</li>
                    <li>Robotics Sensors and Actuators</li>
                    <li>Robotics Programming</li>
                    <li>Robotics Project Demonstrations</li>
                </OverviewList>
            </OverviewDescription>
            <OverviewDescription>
                Throughout the workshop, participants will have the opportunity to work with a variety of Robotic Platforms, including both Software and Hardware simulations. The workshop is open to all students, regardless of their background or experience level. However, basic knowledge of programming is preferred but not mandatory.
            </OverviewDescription>
            <OverviewDescription>
                <i>All work and no play makes Jack a dull boy.</i> Hence you won’t be just attending a workshop. We have cultural events, networking sessions, entertainment shows, competitions, games and much more spanned across three vibrant days. With MATRIX, we aim to bridge the gap between the students in technology and entrepreneurship and to build a space for these individuals to learn and grow.
                So why the wait..? Grab your tickets here... Limited Seats available..
            </OverviewDescription>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeIn", duration: 1, delay: 4 }}
            >
                <CuriousButton
                    onClick={() => {
                        navigate('/know-more')
                    }}
                >
                    I wanna know more
                </CuriousButton>
            </motion.div>
        </OverviewWrapper >
    )
}

const OverviewWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 12vw;
    margin: 0 auto;
    margin-top: 220px;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
    `;
const OverviewTitle = styled.h3`
    color: #fff;
    font-family: "Noto Serif", serif;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    transform: skew(-5deg);
    text-transform: uppercase;
    margin-bottom: 3rem;
    `;

const OverviewDescription = styled.p`
    margin: 0 auto;
   
    margin-bottom: 4rem;
    position: relative;
    color: #fff;
    font-size: 1.1rem !important;
    font-weight: 400;
    font-family: "Noto Serif", serif;
    text-align: left;
    line-height: 2rem;
    margin-bottom: 3rem;
    letter-spacing: 0.5px;
    @media (max-width: 768px) {
    flex-direction: column;
  } font-size: 1rem;
    `;

const OverviewList = styled.ul`
    list-style: none;
    margin: 0 auto;
    margin-left: 4rem;
    //add forward icon
    li::before {
        content: "▶";
        color: #fff;
        font-weight: 100;
        display: inline-block;
        width: 1rem;
        margin-right: 1rem;
    }
    @media (max-width: 768px) {
        margin-left: 2rem;
    }
    `;

const CuriousButton = styled.button`
    background-color: ${AppColor.buttonColor};
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 2rem;
    position: relative; 
    font-family: "Noto Serif", serif;
    font-style: italic;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: #000;
        color: #fff;
    }
    @media screen and (max-width: 768px) {
       font-size:1rem;
    }
    `;

export default OverviewSection
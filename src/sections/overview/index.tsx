import styled from "styled-components";

function OverviewSection() {
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
        </OverviewWrapper>
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
    font-size: 1.1rem;
    font-weight: 500;
    text-align: left;
    line-height: 2rem;
    margin-bottom: 3rem;
    letter-spacing: 0.5px;
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

export default OverviewSection
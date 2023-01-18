import React from 'react'
import styled from 'styled-components';
import { AppColor } from '../../constants/app_color';
import mentor from '../../assets/images/mentor.png';

function AboutMentorSection() {
    return (
        <Wrapper>
            <SectionTitle>Our Mentor</SectionTitle>
            <RowWrapper>
                <ColumnWrapper onClick={
                    () => {
                        window.open("https://www.google.com/search?q=sci-copath");
                    }
                }>
                    <MentorImage src={mentor}></MentorImage>
                    <Title>Jayashankar J P</Title>
                    <SubTitle>(aka SCI-COPATH)</SubTitle>
                </ColumnWrapper>
                <Content>
                    {/* Jayasankar J P is a  Youtuber, Freelancer, Developer & Mentor specialized in IoT and Robotics. He has led about 50+ programs including talk shows, workshops and internships and has mentored more than 500 students. Through his youtube channel he mentors thousands of students to the world of programming. */}
                    Jayasankar J P is a <Span>Youtuber,</Span> <Span>Freelancer,</Span> <Span>Developer</Span> and <Span>Mentor</Span> specialized in <Span>IoT</Span> and <Span>Robotics</Span>. He has led about 50+ programs including Talk Shows, Workshops and Internships and has mentored more than 500 students. Through his youtube channel SCI-COPATH, he mentors thousands of students to the world of programming.
                </Content>
            </RowWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
        height:100%;
    }
    `;
const SectionTitle = styled.h1`
    color: #fff;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4rem;
    margin-top:4rem;
    `;
const Span = styled.span`
    color: yellow;
    font-weight: 700;
    `;
const SubTitle = styled.h6`
    position:relative;
    margin-top: 1rem;
    color: #fff;
    font-size:1.2rem;
    font-weight:600;    
    text-align:center;
    @media (max-width: 768px) {
    font-size:1.rem;
  }
`
const MentorImage = styled.img`
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 20%;
    object-fit: cover;
    border: 5px solid #fff;
    /* background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%); */
    background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
        `;

const RowWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        height: 100%
    }
    `;

const ColumnWrapper = styled.div`
    position: relative;
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        cursor:pointer
    }
    `;
const Title = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 1.5px;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
  }
    `;

const Content = styled.p`
    color: #fff;
    width: 42%;
    margin-top: 3rem;
    height: min-content;
    
    margin-left: 3rem;
    font-size: 1.23rem;
    letter-spacing: 1.5px;
    line-height: 1.8;
    word-spacing: 1px;
    font-weight: 400;
    @media (max-width: 768px) {
        width:100%;
        margin:0 auto;
        font-size:1rem;
        padding:2rem 2.5rem;
    }
    `;
export default AboutMentorSection

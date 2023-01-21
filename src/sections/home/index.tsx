import styled from 'styled-components';
import Header from '../../components/header';
import { AppColor } from '../../constants/app_color';
//IoMdCloseCircleOutline
import { IoMdCloseCircleOutline } from 'react-icons/io';
import background from '../../assets/images/header-background.jpg';
import { useEffect, useState } from 'react';

function Home() {
    const individualRegisterUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfkARugYMkBn9YVqFEwMs1w8iW6WX21zTaEEmZFJGqVFFRWCw/viewform?usp=sf_link";
    const teamRegisterUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfz2SqokPbkr7rat_Vh6EKrYOyTG7IkLgpnOaarScXWOecGBg/viewform";
    const [isPopUpOpened, setIsPopUpOpened] = useState(false);


    return (
        <HomeClass id='home'>
            <Header></Header>
            <HeaderBackground>
                <HeaderBackgroundRight style={
                    {
                        backgroundImage: `url(${background})`
                    }
                }>
                    <RegisterButton onClick={
                        () => {
                            setIsPopUpOpened(true);
                        }
                    }
                    >Register</RegisterButton>
                </HeaderBackgroundRight>


            </HeaderBackground>
            <Wrap>
                <Title>MATRIX</Title>
                <SubTitle>innovative dimension</SubTitle>
            </Wrap>
            <PopUpMenu style={
                {
                    opacity: isPopUpOpened ? 1 : 0,
                    visibility: isPopUpOpened ? 'visible' : 'hidden'
                }
            }>
                <PopMenuHeader>
                    <PopMenuTitle>Register</PopMenuTitle>
                    <PopMenuCloseButton onClick={
                        () => {
                            setIsPopUpOpened(false);
                        }
                    }>
                        <IoMdCloseCircleOutline size={30} color={AppColor.secondary}></IoMdCloseCircleOutline>
                    </PopMenuCloseButton>
                </PopMenuHeader>
                <PopMenuContent>
                    Register as a team of 3 or more people and avail <span style={
                        {
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            color: AppColor.buttonColor
                        }
                    }> 10% discount </span> on your total registration fee. Select an option to complete your registration.
                </PopMenuContent>
                <PopMenuFooter>
                    <IndividualRegisterButton onClick={
                        () => {
                            window.open(individualRegisterUrl, '_blank');
                        }
                    }>Individual Register </IndividualRegisterButton>
                    <TeamRegisterButton onClick={
                        () => {
                            window.open(teamRegisterUrl, '_blank');
                        }
                    }>Team Register</TeamRegisterButton>
                </PopMenuFooter>
            </PopUpMenu>
        </HomeClass >
    )
}

const HomeClass = styled.div`
    width: 100%;
    height: 100vh;
    font-family:""
    
    padding: 0;
    margin: 0;
    overflow: hidden;
    `;

const HeaderBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: ${AppColor.headerBackgroundLeft};
    width: 100%;
    height: 100%;
    overflow: hidden;
         `;


const HeaderBackgroundRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .30);
    background-color: #000;
    height: 100%;
    width: 80%;
    background-size: cover;
      background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width: 768px) {
        width: 100%;
        background-position: center;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .30);
    }
    `;
const Title = styled.h1`
    font-size: 7rem;
    color: ${AppColor.secondary};
    font-weight: 900;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0;
    padding: 0;
    text-shadow: 0 0 8px #000;
    @media screen and (max-width: 768px) {
        font-size: 4rem;
      
        text-shadow: 0 0 12px #000;
    }
    `;
const SubTitle = styled.h2`
    font-size: 1.2rem;
    font-family: "Noto Serif", serif;
    color: #fff;
    font-weight: 800;
      text-transform: uppercase;
    letter-spacing: 0.7rem;
    margin: 0;
    margin-top: 5px;
    text-shadow: 0 0 20px #000;
    margin-left: .3rem;
    padding: 0;
    @media screen and (max-width: 768px) {
        font-size: .75rem;
        letter-spacing: 0.3rem;
        text-shadow: 0 0 15px #000;
    }
    `;
const Wrap = styled.div`
    position: absolute;
    top: 31%;
    left:16%;
    padding: 0 ;
    overflow: hidden;
    `;
const RegisterButton = styled.div`
    position: absolute;
    bottom: 0;
    font-family: "Noto Serif", serif;
    margin: 0;
    left: 0;
    background: ${AppColor.buttonColor};
    color: ${AppColor.primary};
    padding: 2rem 3rem;
    font-size: .96rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    border-radius: 0 .5rem 0 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background: ${AppColor.secondary};
        color: ${AppColor.primary};
    }
`;

const PopUpMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 100;
    padding: 0 24%;
    display: flex;
    overflow: hidden;
    border-radius: 10px;
    justify-content: center;
    flex-direction: column;
    transition: all .4s ease;
    @media screen and (max-width: 768px) {
        padding: 0 5%;
        margin: 0 auto;
        background: rgba(0, 0, 0, .1);
    }
`

const PopMenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: 	#1a1a1a;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    @media screen and (max-width: 768px) {
        background: 	#282828;
    }
`

const PopMenuTitle = styled.h1`
    font-size: 1.4rem;  
    position: relative;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    color: ${AppColor.secondary};
    font-weight: 900;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    margin: 0;
    padding: 1rem 0 0 0;
`

const PopMenuCloseButton = styled.div`
    font-size: 1.2rem;
    color: ${AppColor.secondary};
    font-weight: 900;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0;
    padding: 0;
    text-shadow: 0 0 8px #000;
    cursor: pointer;
`

const PopMenuContent = styled.div`
    padding: 2rem 3rem;
    margin: 0 auto;
    background	#1a1a1a;
    color: #fff;
    font-size: 1rem;
    letter-spacing: .07rem;
    line-height: 1.65rem;
    font-weight: 500;
    @media screen and (max-width: 768px) {
        padding: 1rem 1.5rem;
        background	#282828;
    }

`

const PopMenuFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem 1.5rem;
    background:#1a1a1a;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    @media screen and (max-width: 768px) {
        padding: 1rem 1.5rem;
        background	#282828;
    }
`

const IndividualRegisterButton = styled.div`
    font-size: .8rem;
    color: ${AppColor.secondary};
    font-weight: 600;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    background: ${AppColor.headerBackgroundLeft};
    border-radius: 4px;
    margin: 0 20px;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    transition: all 0.7s ease;
    //loading shade effect from left to right on hover
    &:hover {
        background: linear-gradient(to right, ${AppColor.headerBackgroundLeft} 0%, ${AppColor.headerBackgroundLeft} 50%, ${AppColor.primary} 50%, ${AppColor.primary} 100%);
        background-size: 200% 100%;
        background-position: right bottom;
        color: ${AppColor.secondary};
        transition: all 0.7s ease;
        box-shadow: 0 0 30px #000;
    }
    @media screen and (max-width: 768px) {
        font-size: .75rem;
        padding: .8rem;
        text-align: center;
        margin: 0 20px 0 0;
    }
`


const TeamRegisterButton = styled.div`
    font-size: .8rem;
    color: ${AppColor.primary};
    font-weight: 600;
    background: ${AppColor.buttonColor};
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    border-radius: 4px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        background: linear-gradient(to right, ${AppColor.buttonColor} 0%, ${AppColor.buttonColor} 50%, ${AppColor.primary} 50%, ${AppColor.primary} 100%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.5s ease;
        color: ${AppColor.secondary};
        box-shadow: 0 0 30px #000;
    }
    @media screen and (max-width: 768px) {
        font-size: .75rem;
        margin: 0px;
        padding: .8rem; 
        text-align: center;
    }
`





export default Home;
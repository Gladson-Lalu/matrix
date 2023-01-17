import styled from 'styled-components';
import Header from '../../components/header';
import { AppColor } from '../../constants/app_color';
import background from '../../assets/images/header-background.jpg';

function Home() {
    const registerUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfkARugYMkBn9YVqFEwMs1w8iW6WX21zTaEEmZFJGqVFFRWCw/viewform?usp=sf_link";
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
                            window.open(registerUrl)
                        }
                    }
                    >Register</RegisterButton>
                </HeaderBackgroundRight>


            </HeaderBackground>
            <Wrap>
                <Title>MATRIX</Title>
                <SubTitle>innovative dimension</SubTitle>
            </Wrap>
        </HomeClass>
    )
}

const HomeClass = styled.div`
    width: 100%;
    height: 100vh;
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
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .35);
    background-color: #000;
    height: 100%;
    width: 80%;
    background-size: cover;
      background-repeat: no-repeat;
    background-position: left;
    @media screen and (max-width: 768px) {
        width: 100%;
        background-position: center;
        box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, .23);
    }
    `;
const Title = styled.h1`
    font-size: 7rem;
    color: ${AppColor.secondary};
    font-weight: 900;
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
    color: ${AppColor.secondary};
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
    margin: 0;
    left: 0;
    background: ${AppColor.buttonColor};
    color: ${AppColor.primary};
    padding: 2rem 3rem;
    font-size: .85rem;
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




export default Home
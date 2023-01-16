import styled from 'styled-components'
function Description() {
    return (
        <DescriptionBox id='about'>
            <DescriptionContent>
                In this age where Robotics and the Internet of Things rules the news, we know you are curious about it.  So IDEAMIRROR, College of Engineering Aranmula Presents MATRIX.
                A 3-days IoT and Robotic workshop specifically designed for students who are interested in learning about the basics of robotics, IoT and its applications.
            </DescriptionContent>
        </DescriptionBox>
    )
}

const DescriptionBox = styled.div`
    margin-top: 200px;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

const DescriptionContent = styled.div`
    position: relative;
    width: 62vw;
    font-size: 1.3rem;
    font-weight: 100;
    line-height: 2rem;
       `;



export default Description
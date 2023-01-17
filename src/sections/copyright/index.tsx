import styled from "styled-components";

function CopyrightTag() {
    return (
        <Wrapper>
            <Content>©2023 All Rights Reserved. Designed by
                <Link href="https://cearanmula.ac.in/" target="_blank"> College of Engineering Aranmula</Link>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    margin-top: 80px;
    padding: 0 2rem;  
    margin-bottom: 3rem;
    margin-top: 180px;
    @media screen and (max-width: 768px) {
        margin-top: 80px;
    }
    `;
const Content = styled.p`
    color: #fff;
    font-size: .9rem;
    font-weight: 50;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: .8rem;
        padding: 0 1rem;
    }
    `;

const Link = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        color: #fff;
        text-decoration: none;
    }
    `;



export default CopyrightTag;
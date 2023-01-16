import styled from 'styled-components'
function Description() {
    return (
        <DescriptionBox id='about'>
            <DescriptionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat aperiam vel amet mollitia voluptatibus voluptatum, iure, recusandae asperiores autem reprehenderit, odio quia tempora doloribus repellendus. Facere maiores ducimus vitae aut praesentium saepe ea. Quam temporibus quaerat corporis corrupti mollitia ipsam nostrum vero, qui assumenda non, facere est veritatis expedita.
            </DescriptionContent>
        </DescriptionBox>
    )
}

const DescriptionBox = styled.div`
    margin-top: 150px;
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
    width: 60vw;
    font-size: 1.1rem;
    font-weight: 100;
    line-height: 1.5rem;
       `;

export default Description
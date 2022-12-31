import React from 'react'
import styled from 'styled-components'
function Description() {
    return (
        <DescriptionBox>
            <DescriptionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat aperiam vel amet mollitia voluptatibus voluptatum, iure, recusandae asperiores autem reprehenderit, odio quia tempora doloribus repellendus. Facere maiores ducimus vitae aut praesentium saepe ea. Quam temporibus quaerat corporis corrupti mollitia ipsam nostrum vero, qui assumenda non, facere est veritatis expedita.
            </DescriptionContent>
        </DescriptionBox>
    )
}

const DescriptionBox = styled.div`
    position: relative;
    height: 50vh;
    width: 98vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `;

const DescriptionContent = styled.div`
    position: relative;
    width: 50vw;
       `;

export default Description
import React from 'react';
import styled from 'styled-components';

//add google map iframe

const MapSection = () => {
    const src: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.5624364578455!2d76.68238705362023!3d9.322202114935473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063d0921e18ea9%3A0xa09306d585c4d1f4!2sCollege%20of%20Engineering%2C%20Aranmula!5e0!3m2!1sen!2sin!4v1673732599290!5m2!1sen!2sin';
    return (
        <MapContainer>
            <MapTitle>Location</MapTitle>
            <MapIframe src={src} allowFullScreen={true} loading="lazy" title='College of Engineering Aranmula' seamless={true} defaultValue={src}
            ></MapIframe>
        </MapContainer>
    )
}

const MapContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 150px;
    padding: 0 2rem;
`

const MapIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 6px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    pointer-events: visiblePainted;
`

const MapTitle = styled.h3`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
`

export default MapSection

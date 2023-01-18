import { motion } from 'framer-motion';
import styled from 'styled-components';


const MapSection = () => {
    const src: string = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.5624364578455!2d76.68238705362023!3d9.322202114935473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b063d0921e18ea9%3A0xa09306d585c4d1f4!2sCollege%20of%20Engineering%2C%20Aranmula!5e0!3m2!1sen!2sin!4v1673732599290!5m2!1sen!2sin';
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 1 }}>
            <MapContainer id='location'>
                <MapTitle>Location</MapTitle>
                <MapIframe src={src} allowFullScreen={true} loading="lazy" title='College of Engineering Aranmula' seamless={true} defaultValue={src}
                ></MapIframe>
            </MapContainer>
        </motion.div>
    )
}

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 0rem;
    @media screen and (max-width: 768px) {
        padding: 0 1rem;
        margin-top: 4rem;
    }
 
`

const MapIframe = styled.iframe`
    width: 42vw;
    height: 100%;
    border: 0;
    border-radius: 6px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    pointer-events: visiblePainted;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 80vh;
    }
`

const MapTitle = styled.h3`
    color: #fff;
    font-family: "Noto Serif", serif;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
`

export default MapSection

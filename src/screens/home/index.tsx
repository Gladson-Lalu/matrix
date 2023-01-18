import { motion } from "framer-motion";
import ContactSection from "../../sections/contacts";
import CopyrightTag from "../../sections/copyright";
import Description from "../../sections/description";
import EventSection from "../../sections/events";
import Home from "../../sections/home";
import MapSection from "../../sections/location";
import OverviewSection from "../../sections/overview";
import styled from "styled-components";

function HomeScreen() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "circIn", duration: 1 }}
        >

            <Home></Home>
            <Description></Description>
            <EventSection></EventSection>
            <OverviewSection></OverviewSection>
            <MapAndContactWrapper id='contact-location'>
                <ContactSection></ContactSection>
                <div style={{ width: '6rem' }}></div>
                <MapSection></MapSection>
            </MapAndContactWrapper>
            <CopyrightTag></CopyrightTag>
        </motion.div >


    )
}

const MapAndContactWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 50vh;
    padding: 0 2rem;
    margin: 0 auto;
    margin-top: 200px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        height: 100%
    }
    `;

export default HomeScreen
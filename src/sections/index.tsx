import Description from './description'
import Home from './home'
import EventSection from './events'
import MapSection from './location'
import ContactSection from './contacts'
import { motion } from "framer-motion";
import CopyrightTag from './copyright'
import styled from 'styled-components'
import OverviewSection from './overview'
function WebApp() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "circIn", duration: .8 }}
        >

            <Home></Home>
            <Description></Description>
            <EventSection></EventSection>
            <OverviewSection></OverviewSection>
            <MapAndContactWrapper>
                <ContactSection></ContactSection>
                <div style={{ width: '3rem' }}></div>
                <MapSection></MapSection>
            </MapAndContactWrapper>
            <CopyrightTag></CopyrightTag>
        </motion.div >


    )
}

const MapAndContactWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50vh;
    padding: 0 2rem;
    margin: 0 auto;
    margin-top: 200px;
    `;

export default WebApp
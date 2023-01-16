import Description from './description'
import Home from './home'
import EventSection from './events'
import TimeLineSection from './timeline'
import MapSection from './location'
import ContactSection from './contacts'
import { motion } from "framer-motion";
import CopyrightTag from './copyright'
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
            <TimeLineSection></TimeLineSection>
            <MapSection></MapSection>
            <ContactSection></ContactSection>
            <CopyrightTag></CopyrightTag>
        </motion.div >


    )
}


export default WebApp
import { useEffect } from 'react';
import AboutMentorSection from '../../sections/about_mentor'
import FaqSection from '../../sections/faq'
import { motion } from 'framer-motion'

function KnoMoreSection() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "circIn", duration: 1 }}
        >
            <AboutMentorSection></AboutMentorSection>
            <FaqSection></FaqSection>
        </motion.div>
    )
}

export default KnoMoreSection
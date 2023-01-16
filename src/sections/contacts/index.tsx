import styled from 'styled-components';
import ContactCard from './contact_card';



const contactList = [
    {
        id: 1,
        name: 'B S Adithya',
        phone: '+91 7510556352',
    },
    {
        id: 2,
        name: 'Lezin V M',
        phone: '+91 9633179406',
    }
]

function ContactSection() {
    return (
        <SectionWrapper id='contacts'>
            <SectionTitle>Contact</SectionTitle>
            <ContactList>
                {contactList.map((contact) => (
                    <ContactCard key={contact.id} name={contact.name} phone={contact.phone} />
                ))}
            </ContactList>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    width: 40vw;
    height: 100%;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
    }
    `;


const SectionTitle = styled.h3`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    `;

const ContactList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0 2rem;
    }
    `;

export default ContactSection
import styled from 'styled-components';
import image1 from '../../assets/images/contacts/1.jpg';
import image2 from '../../assets/images/contacts/2.jpg';
import image3 from '../../assets/images/contacts/3.jpg';
import image4 from '../../assets/images/contacts/4.jpg';


const contactList = [
    {
        id: 1,
        title: 'Program Coordinator',
        name: 'Lorem Ipsum',
        userImage: image1,
        email: 'lorem@email.com',
        number: '1234567890'
    },
    {
        id: 2,
        title: 'Program Coordinator',
        name: 'Lorem Ipsum',
        userImage: image2,
        email: 'lorem@email.com',
        number: '1234567890',
    },
    {
        id: 3,
        title: 'Event Coordinator',
        name: 'Lorem Ipsum',
        userImage: image3,
        email: 'lorem@t.com',
        number: '1234567890',
    },
    {
        id: 4,
        title: 'Event Coordinator',
        name: 'Lorem Ipsum',
        userImage: image4,
        email: 'lorem@t.com'
    },

]

function ContactSection() {
    return (
        <SectionWrapper id='contacts'>
            <SectionTitle>Contact</SectionTitle>
            <GridView>
                {contactList.map((contact) => (
                    //add background image
                    <Card key={contact.id} style={{ backgroundImage: `url(${contact.userImage})` }}>
                        <CardContent>
                            <h3>{contact.title}</h3>
                            <h5>{contact.name}</h5>
                            <p>{contact.email}</p>
                        </CardContent>
                    </Card>
                ))}
            </GridView>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    margin: 0 auto;
    margin-top: 200px;
    `;

const GridView = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
    `;

const SectionTitle = styled.h3`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    `;

const Card = styled.div`
    position: relative;
    border-radius: 4px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, .2);
    width: 100%;
    height: 350px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    `;

const CardContent = styled.div`
    position: absolute;
    height: 80px;
    font-weight: 200;
    width: 100%;
    bottom: 0;
    left: 0;
    margin: 0 0;
    font-size: .9rem;
    line-height: 1rem;
    backdrop-filter: blur(8px);
    background: linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,.788));
    padding: 1rem;
    `;


export default ContactSection
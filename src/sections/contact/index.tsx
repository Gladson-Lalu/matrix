import React from 'react'
import styled from 'styled-components';

const contactList = [
    {
        id: 1,
        title: 'Program Coordinator',
        name: 'Lorem Ipsum',
        userImage: "https://loremflickr.com/720/720/user",
        email: 'lorem@email.com',
        number: '1234567890'
    },
    {
        id: 2,
        title: 'Program Coordinator',
        name: 'Lorem Ipsum',
        userImage: "https://loremflickr.com/720/720/user",
        email: 'lorem@email.com',
        number: '1234567890',
    },
    {
        id: 3,
        title: 'Event Coordinator',
        name: 'Lorem Ipsum',
        userImage: "https://loremflickr.com/720/720/user",
        email: 'lorem@t.com',
        number: '1234567890',
    },
]

function ContactSection() {
    return (
        <SectionWrapper>
            <SectionTitle>Contact</SectionTitle>
            <GridView>
                {contactList.map((contact) => (
                    <Card key={contact.id}>
                        <Image>
                            <img src={contact.userImage} alt="user" />
                        </Image>
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
    height: 100vh;
    padding: 0 3rem;
    margin: 0 auto;
    margin-top: 200px;
    `;

const GridView = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    `;

const SectionTitle = styled.h3`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    `;

const Image = styled.div`
    height: 100%;
    object-fit: cover;
    `;

const Card = styled.div`
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 2rem rgba(0, 0, 0, .2);
    width: 100%;
    height: 25rem;
    resize: both;
    overflow: hidden;
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
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppColor } from '../constants/app_color';
import Hamburger from 'hamburger-react';

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolledAfterHome, setScrolledAfterHome] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            const home = document.getElementById('home');
            const homeTop = home?.offsetHeight;
            const about = document.getElementById('about');
            const aboutTop = about?.offsetTop;
            const aboutHeight = about?.clientHeight;
            const events = document.getElementById('events');
            const eventsTop = events?.offsetTop;
            const eventsHeight = events?.clientHeight;
            const overview = document.getElementById('overview');
            const overviewTop = overview?.offsetTop;
            const overviewHeight = overview?.clientHeight;
            const contact_location = document.getElementById('contact-location');
            const contact_locationTop = contact_location!.offsetTop - 200;
            const contact_locationHeight = contact_location?.clientHeight;
            const aboutMenuItem = document.getElementById('aboutMenuItem');
            const eventsMenuItem = document.getElementById('eventsMenuItem');
            const overviewMenuItem = document.getElementById('overviewMenuItem');
            const locationMenuItem = document.getElementById('locationMenuItem');
            const contactMenuItem = document.getElementById('contactMenuItem');
            if (scroll > homeTop!) {
                setScrolledAfterHome(true);
            } else {
                setScrolledAfterHome(false);
            }
            if (scroll >= aboutTop! - 300 && scroll < aboutTop! + aboutHeight!) {
                setActive(aboutMenuItem!);
            } else {
                setInactive(aboutMenuItem!);
            }
            if (scroll >= eventsTop! && scroll < eventsTop! + eventsHeight!) {
                setActive(eventsMenuItem!);
            } else {
                setInactive(eventsMenuItem!);
            }
            if (scroll >= overviewTop! && scroll < overviewTop! + overviewHeight!) {
                setActive(overviewMenuItem!);
            } else {
                setInactive(overviewMenuItem!);
            }
            if (scroll >= contact_locationTop! && scroll < contact_locationTop! + contact_locationHeight!) {
                setActive(locationMenuItem!);
                setActive(contactMenuItem!);
            } else {
                setInactive(locationMenuItem!);
                setInactive(contactMenuItem!);
            }
        });
        function setActive(element: HTMLElement) {
            element.style.color = AppColor.menuActive;
            element.style.scale = '1.1';
        }
        function setInactive(element: HTMLElement) {
            element.style.color = AppColor.secondary;
            element.style.scale = '1';
        }
    }, []);



    return (
        <Nav style={
            //add a background color to the nav bar when the user scrolls down after the home section
            {
                backgroundColor: scrolledAfterHome ? `rgb(
                    0,0,0,0.45)` : 'transparent',

                transition: 'background-color 0.5s ease-in-out',
            }
        }>
            <Logo onClick={
                () => {
                    const home = document.getElementById('home');
                    home?.scrollIntoView({ behavior: 'smooth' });
                }
            }>Matrix</Logo>

            <Menu>
                <MenuItem id='aboutMenuItem' onClick={
                    () => {
                        const about = document.getElementById('about');
                        about?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>About</MenuItem>
                <MenuItem id='eventsMenuItem' onClick={
                    () => {
                        const events = document.getElementById('events');
                        events?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>Events</MenuItem>

                <MenuItem id='overviewMenuItem' onClick={
                    () => {
                        const overview = document.getElementById('overview');
                        overview?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>overview</MenuItem>
                <MenuItem id='contactMenuItem'
                    onClick={
                        () => {
                            const contact = document.getElementById('contacts');
                            contact?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }>Contact</MenuItem>
                <MenuItem id='locationMenuItem'
                    onClick={
                        () => {
                            const location = document.getElementById('location');
                            location?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }>Location</MenuItem>


            </Menu>
            <HamburgerWrapper>
                <Hamburger toggled={open} toggle={setOpen} direction={"right"} />
            </HamburgerWrapper>
            {open && <MobileMenu>
                <Nav style={
                    {
                        justifyContent: 'right',
                    }
                }>
                    <HamburgerWrapper>
                        <Hamburger toggled={open} toggle={setOpen} direction={"right"} />
                    </HamburgerWrapper>
                </Nav>
                <MenuItem id='aboutMenuItem' onClick={
                    () => {
                        setOpen(false);
                        const about = document.getElementById('about');
                        about?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>About</MenuItem>
                <MenuItem id='eventsMenuItem' onClick={
                    () => {
                        setOpen(false);
                        const events = document.getElementById('events');
                        events?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>Events</MenuItem>
                <MenuItem id='overviewMenuItem' onClick={
                    () => {
                        setOpen(false);
                        const overview = document.getElementById('overview');
                        overview?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>overview</MenuItem>
                <MenuItem id='locationMenuItem'
                    onClick={
                        () => {
                            setOpen(false);
                            const location = document.getElementById('location');
                            location?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }>Location</MenuItem>
                <MenuItem id='contactMenuItem'
                    onClick={
                        () => {
                            setOpen(false);
                            const contact = document.getElementById('contacts');
                            contact?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }>Contact</MenuItem>
            </MobileMenu>
            }
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    z-index: 10;
    @media screen and (max-width: 768px) {
        padding: 0 2rem;
    }
    `;
const Logo = styled.div`
    color: ${AppColor.secondary};
    font-size: 1.3rem;
    font-weight: bold;
    font-family: 'Cinzel Decorative', cursive;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: ${AppColor.buttonColor};
    }
    @media screen and (max-width: 768px) {
        margin-left: 0rem;
    }
    `;
const Menu = styled.ul`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    margin: auto 0;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    display: flex;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
    `;
const MenuItem = styled.li`
    margin-left: 2rem;
    color: ${AppColor.secondary};
    font-size: 1rem;
  
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: ${AppColor.buttonColor};
    }
    @media screen and (max-width: 768px) {
        margin-bottom: 1rem;
        font-weight: 900;
        font-size: 1rem;
    }

    `;
const HamburgerWrapper = styled.div`
    display: none;
    position: relative;
        top: 0;
        margin: 0;
    @media screen and (max-width: 768px) {
        display: block;
    }
    `;
const MobileMenu = styled.div`
    display: none;
    flex-direction: column;
    padding-top: 100px;
    align-items: left;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: #360033;  
    background: -webkit-linear-gradient(to bottom, #0b8793, #360033);  
    background: linear-gradient(to bottom, #0b8793, #360033); 
    opacity: 0.97;
    @media screen and (max-width: 768px) {
        display: flex;
         list-style: none;
    }
    `;




export default Header;
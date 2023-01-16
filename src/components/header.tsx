import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AppColor } from '../constants/app_color';
import Hamburger from 'hamburger-react';
function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            const about = document.getElementById('about');
            const aboutTop = about?.offsetTop;
            const aboutHeight = about?.clientHeight;
            const events = document.getElementById('events');
            const eventsTop = events?.offsetTop;
            const eventsHeight = events?.clientHeight;
            const timeline = document.getElementById('timeline');
            const timelineTop = timeline?.offsetTop;
            const timelineHeight = timeline?.clientHeight;
            const location = document.getElementById('location');
            const locationTop = location?.offsetTop;
            const locationHeight = location?.clientHeight;
            const contact = document.getElementById('contacts');
            const contactTop = contact?.offsetTop;
            const contactHeight = contact?.clientHeight;
            const aboutMenuItem = document.getElementById('aboutMenuItem');
            const eventsMenuItem = document.getElementById('eventsMenuItem');
            const timelineMenuItem = document.getElementById('timelineMenuItem');
            const locationMenuItem = document.getElementById('locationMenuItem');
            const contactMenuItem = document.getElementById('contactMenuItem');
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
            if (scroll >= timelineTop! && scroll < timelineTop! + timelineHeight!) {
                setActive(timelineMenuItem!);
            } else {
                setInactive(timelineMenuItem!);
            }
            if (scroll >= locationTop! && scroll < locationTop! + locationHeight!) {
                setActive(locationMenuItem!);
            } else {
                setInactive(locationMenuItem!);
            }
            if (scroll >= contactTop! && scroll < contactTop! + contactHeight!) {
                setActive(contactMenuItem!);
            } else {
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
        <Nav>
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

                <MenuItem id='timelineMenuItem' onClick={
                    () => {
                        const timeline = document.getElementById('timeline');
                        timeline?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>Timeline</MenuItem>

                <MenuItem id='locationMenuItem'
                    onClick={
                        () => {
                            const location = document.getElementById('location');
                            location?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }>Location</MenuItem>

                <MenuItem id='contactMenuItem'
                    onClick={
                        () => {
                            const contact = document.getElementById('contacts');
                            contact?.scrollIntoView({ behavior: 'smooth' });
                        }
                    }>Contact</MenuItem>
            </Menu>
            <HamburgerWrapper>
                <Hamburger toggled={open} toggle={setOpen} direction={"right"} />
            </HamburgerWrapper>
            {open && <MobileMenu>
                <HamburgerWrapper>
                    <Hamburger toggled={open} toggle={setOpen} direction={"right"} />
                </HamburgerWrapper>
                {/* <MenuItem id='aboutMenuItem'>About</MenuItem>
                <MenuItem id='eventsMenuItem'>Events</MenuItem>
                <MenuItem id='timelineMenuItem'>Timeline</MenuItem>
                <MenuItem id='locationMenuItem'>Location</MenuItem>
                <MenuItem id='contactMenuItem'>Contact</MenuItem> */}
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
                <MenuItem id='timelineMenuItem' onClick={
                    () => {
                        setOpen(false);
                        const timeline = document.getElementById('timeline');
                        timeline?.scrollIntoView({ behavior: 'smooth' });
                    }
                }>Timeline</MenuItem>
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
    height: 100px;
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
    font-size: 1.1rem;
    font-weight: 900;
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
    margin: 0;
    padding: 30px 20px;
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
    font-size: .8rem;
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
    position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        padding: 30px 20px;
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
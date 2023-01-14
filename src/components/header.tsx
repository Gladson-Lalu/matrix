import styled from 'styled-components';
import { AppColor } from '../constants/app_color';
function Header() {
    return (
        <Nav>
            <Logo>Matrix</Logo>
            <Menu>
                <MenuItem>About</MenuItem>
                <MenuItem>Events</MenuItem>
                <MenuItem>Timeline</MenuItem>
                <MenuItem>Location</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
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
    `;
const Logo = styled.div`
    color: ${AppColor.secondary};
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
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
    `;

export default Header
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled.div`
    .navbar {
        width: 100vw;
    }

    .navbar-light,
    .navbar-toggler,
    .nav-link {
        border: 0;
        color: white !important;
        font-size: 1.1rem;
        font-weight: 700;
    }

    .navStyle {
        background-color: hsl(257, 27%, 26%);
        border-radius: 10px;
        margin-top: 20px;
    }

    .navbar-nav {
        align-items: center;
    }

    #basic-navbar-nav > * {
        padding: 20px 0px;
        margin: 30px;
    }

    .border-nav {
        border-color: #616161 !important;
    }

    @media (min-width: 720px) {
        .navbar {
            width: 80vw;
            display: flex;
            align-items: baseline;
        }

        .navStyle {
            background-color: transparent;
            display: flex;
            justify-content: space-between;
        }

        .navbar-light,
        .navbar-toggler,
        .nav-link {
            color: hsl(0, 0%, 75%) !important;
            font-size: 0.95rem;
            margin: 0 15px;
        }
        .border-nav {
            border: none !important;
        }
        #basic-navbar-nav > * {
            padding: 0;
            margin: 0px;
        }

        a:hover {
            color: black !important;
        }
    }
`;

const Header = () => {
    return (
        <StyledNav>
            <Navbar bg="white" expand="md">
                <Navbar.Brand href="#home">
                    <img
                        src="../images/logo.svg"
                        alt="logo"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="navStyle">
                    <Nav className="">
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <Nav.Link href="#Pricing">Pricing</Nav.Link>
                        <Nav.Link href="#Ressources">Ressources</Nav.Link>
                    </Nav>
                    <Nav className="border-top border-nav">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link
                            as="button"
                            className="btn-main btn-width-100"
                            href="#register"
                        >
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </StyledNav>
    );
};

export default Header;

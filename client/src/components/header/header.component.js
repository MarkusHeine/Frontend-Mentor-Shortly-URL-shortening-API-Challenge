import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const StyledNav = styled.div`
    width: 100%;

    /* .navbar-light,
    .navbar-toggler,
    .nav-link {
        border: 0;
        color: white !important;
        font-size: 1.1rem;
        font-weight: 700;
    } */
    .bg-violett {
        background-color: ${colors.primary.darkViolet};
    }

    .rounded {
        border-radius: 0.5rem !important;
    }

    .border-top {
        border-color: #495057 !important;
    }

    /*.navbar-nav {
        align-items: center;
    }

    #basic-navbar-nav > * {
        padding: 20px 0px;
        margin: 30px;
    }

    .border-nav {
        border-color: #616161 !important;
    } */

    @media (min-width: 720px) {
        /* .navbar {
            width: 80vw;
            display: flex;
            align-items: baseline;
        } */

        /* .bg-violett {
            background-color: transparent;
            display: flex;
            justify-content: space-between;
        } */

        /* .navbar-light,
        .navbar-toggler,
        .nav-link {
            color: hsl(0, 0%, 75%) !important;
            font-size: 0.95rem;
            margin: 0 15px;
        } */
        /* .border-nav {
            border: none !important;
        } */
        /* #basic-navbar-nav > * {
            padding: 0;
            margin: 0px;
        } */

        /* a:hover {
            color: black !important;
        } */
    }
`;

const Header = () => {
    return (
        <StyledNav>
            <Container fluid className="w-100">
                <Navbar
                    bg="white"
                    expand="md"
                    className="px-0 px-2 py-4 px-md-5"
                >
                    <Navbar.Brand href="#home">
                        <img
                            src="../images/logo.svg"
                            alt="logo"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        className="border-0"
                    />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="my-3 p-3 border-0 rounded bg-violett flex-column align-content-center"
                    >
                        <Nav className="align-items-center mt-4">
                            <Nav.Link className="m-2" href="#Features">
                                Features
                            </Nav.Link>
                            <Nav.Link className="m-2" href="#Pricing">
                                Pricing
                            </Nav.Link>
                            <Nav.Link className="m-2" href="#Ressources">
                                Ressources
                            </Nav.Link>
                        </Nav>
                        <Nav className="mt-3 px-2 align-items-center border-top border-nav">
                            <Nav.Link className="m-2" href="#login">
                                Login
                            </Nav.Link>
                            <Nav.Link
                                as="button"
                                className="mt-2 mb-4 btn-main btn-width-100 btn-pill"
                                href="#register"
                            >
                                Sign up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </StyledNav>
    );
};

export default Header;

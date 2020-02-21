import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const StyledNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .bg-navigation {
        background-color: ${colors.primary.darkViolet};
    }

    .rounded {
        border-radius: 0.5rem !important;
    }

    .border-top {
        border-color: #495057 !important;
    }

    .nav-link {
        color: white !important;
        font-weight: 700;
        font-size: 1.2rem;
    }

    @media (min-width: 720px) {
        .bg-navigation {
            background-color: white;
        }

        .nav-link {
            color: ${colors.font.a} !important;
            font-weight: 700;
            font-size: 1rem;
        }

        .nav-link:hover {
            color: ${colors.font.aHover} !important;
        }

        .border-top {
            border: none !important;
        }
    }
`;

const Header = () => {
    return (
        <StyledNav>
            <Container>
                <Navbar bg="white" expand="md" className="px-2 py-4 px-md-0">
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
                        className="my-3 p-3 border-0 rounded bg-navigation flex-column flex-md-row align-content-center align-items-center justify-content-between"
                    >
                        <Nav className="align-items-center mt-4 mt-md-0">
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
                        <Nav className="mt-3 mt-md-0 px-2 align-items-center border-top">
                            <Nav.Link className="m-2" href="#login">
                                Login
                            </Nav.Link>
                            <Nav.Link
                                as="button"
                                className="mt-2 mt-md-0 mb-4 mb-md-0 btn-main btn-width-100 btn-pill"
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

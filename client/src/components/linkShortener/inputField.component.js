import React, { useState, useContext } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContext } from "./linkContext.provider";
import styled from "styled-components";

const uuidv4 = require("uuid/v4");

const StyledInput = styled.div`
    width: 100%;

    .bg-hard-grey-grad {
    }

    .bg-img {
        background-color: hsl(257, 27%, 26%);
        background-image: url("../../images/bg-shorten-mobile.svg");
    }

    .border-rounded {
        border-radius: 0.5rem;
    }

    .form {
        display: flex !important;
    }
`;

const InputField = () => {
    const [link, setLink] = useState({
        url:
            "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
    });
    const { links, setLinks } = useContext(LinkContext);

    const onChange = e => {
        setLink({ [e.target.name]: e.target.value });
    };

    const handleClick = async e => {
        e.preventDefault();
        const resp = await fetch("https://rel.ink/api/links/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(link)
        });
        const data = await resp.json();
        const linkObj = {
            id: uuidv4(),
            url: data
        };
        setLinks([...links, linkObj]);
    };

    return (
        <StyledInput>
            <Container>
                <Col>
                    <Row className="justify-content-center py-2 px-4 my-md-5 my-2 mx-md-1 py-md-4 px-md-4 border bg-img border-rounded">
                        <Form className="w-100">
                            <Form.Control
                                type="text"
                                placeholder="Shorten a link here ..."
                                name="url"
                                onInput={onChange}
                                defaultValue={link.url}
                                className="mt-4 mb-2 mt-md-0 mb-md-"
                            ></Form.Control>
                            <Button
                                className="btn-main btn-width-100 btn-rounded mt-2 mb-4 mt-md-0 mb-md-0"
                                type="submit"
                                onClick={handleClick}
                            >
                                Shorten It!
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Container>
        </StyledInput>
    );
};

export default InputField;

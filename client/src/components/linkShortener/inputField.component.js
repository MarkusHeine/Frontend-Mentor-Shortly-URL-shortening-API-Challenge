import React, { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { LinkContext } from "./linkContext.provider";

const uuidv4 = require("uuid/v4");

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
        <Container>
            <Form>
                <Form.Group controlId="linkInput">
                    <Form.Control
                        type="text"
                        placeholder="Shorten a link here ..."
                        name="url"
                        onInput={onChange}
                        defaultValue={link.url}
                    ></Form.Control>
                </Form.Group>
            </Form>

            <Button
                className="btn-main btn-width-100 mt-3 btn-rounded"
                type="submit"
                onClick={handleClick}
            >
                Shorten It!
            </Button>
        </Container>
    );
};

export default InputField;

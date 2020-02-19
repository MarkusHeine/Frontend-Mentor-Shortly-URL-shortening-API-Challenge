import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import InputField from "./inputField.component";
import LinkDisplay from "./linkDisplay.component";
import { LinkContext } from "./linkContext.provider";

const StyledShortener = styled.div`
    .bg-img {
        background-color: hsl(257, 27%, 26%);
        background-image: url("../../images/bg-shorten-mobile.svg");
    }

    .border-rounded {
        border-radius: 10px;
    }
`;

const LinkShortener = () => {
    const [links, setLinks] = useState([]);
    const value = useMemo(() => ({ links, setLinks }), [links, setLinks]);

    return (
        <StyledShortener>
            <Container>
                <Col>
                    <LinkContext.Provider value={value}>
                        <Row className="m-1 pt-4 pb-4 mb-4 border bg-img border-rounded">
                            <InputField></InputField>
                        </Row>
                        {links.length > 0 &&
                            links.map(link => (
                                <LinkDisplay
                                    key={link.id}
                                    link={link.url}
                                ></LinkDisplay>
                            ))}
                    </LinkContext.Provider>
                </Col>
            </Container>
        </StyledShortener>
    );
};

export default LinkShortener;

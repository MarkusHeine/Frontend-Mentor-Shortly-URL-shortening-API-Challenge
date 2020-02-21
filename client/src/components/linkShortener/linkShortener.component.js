import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import InputField from "./inputField.component";
import LinkDisplay from "./linkDisplay.component";
import { LinkContext } from "./linkContext.provider";

const StyledShortener = styled.div`
    .bg-hard-grey-grad {
        background: linear-gradient(
            white 0%,
            white 50%,
            #e6e6e6 50%,
            #e6e6e6 100%
        );
    }

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
            <Container fluid className="p-0 bg-hard-grey-grad">
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

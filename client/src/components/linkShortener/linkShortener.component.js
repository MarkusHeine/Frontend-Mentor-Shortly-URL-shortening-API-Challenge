import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import InputField from "./inputField.component";
import LinkDisplay from "./linkDisplay.component";
import { LinkContext } from "./linkContext.provider";

const StyledShortenerInput = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: linear-gradient(white 0%, white 50%, #e6e6e6 50%, #e6e6e6 100%);
`;

const LinkShortener = () => {
    const [links, setLinks] = useState([]);
    const value = useMemo(() => ({ links, setLinks }), [links, setLinks]);

    return (
        <LinkContext.Provider value={value}>
            <StyledShortenerInput>
                <Container>
                    <Row>
                        <InputField></InputField>
                    </Row>
                    {/* <Row className="">
                        <Col>
                            <Row className="w-20 m-1 pt-4 pb-4 mb-4 border bg-img border-rounded">
                                <Col>
                                    <InputField></InputField>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}

                    {/* 
                        <InputField></InputField>
                    </Row>
                    <Row>
                        {links.length > 0 &&
                            links.map(link => (
                                <LinkDisplay
                                    key={link.id}
                                    link={link.url}
                                ></LinkDisplay>
                            ))}
                    </Row> */}
                </Container>
            </StyledShortenerInput>
        </LinkContext.Provider>
    );
};

export default LinkShortener;

import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import InputField from "./inputField.component";

const StyledShortener = styled.div`
    .bg-img {
        background-color: hsl(257, 27%, 26%);
        background-image: url("../../images/bg-shorten-mobile.svg");
        border-radius: 10px;
    }
`;

const LinkShortener = () => {
    return (
        <StyledShortener>
            <Container>
                <Row className="m-1 pt-4 pb-4 mb-4 border bg-img">
                    <Col>
                        <InputField></InputField>
                    </Col>
                </Row>
            </Container>
        </StyledShortener>
    );
};

export default LinkShortener;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoImageComponent from "./infoImage.component";
import styled from "styled-components";

const StyledInfo = styled.div`
    .info {
        max-width: 100vw;
    }

    .container {
        margin-top: 10px;
    }

    @media (min-width: 720px) {
        .container {
            margin-top: 50px;
        }
    }
`;

const Info = () => {
    return (
        <StyledInfo>
            <Container>
                <Row className="flex-column-reverse flex-md-row">
                    <Col xs={12} md={7}>
                        <p>info</p>
                    </Col>
                    <Col xs={12} md={5}>
                        <InfoImageComponent></InfoImageComponent>
                    </Col>
                </Row>
            </Container>
        </StyledInfo>
    );
};

export default Info;

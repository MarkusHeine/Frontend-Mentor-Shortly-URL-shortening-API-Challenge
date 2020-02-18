import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoImageComponent from "./infoImage.component";
import styled from "styled-components";

const StyledInfo = styled.div``;

const Info = () => {
    return (
        <StyledInfo>
            <Container className="mt-3">
                <Row className="flex-column-reverse flex-md-row">
                    <Col xs={12} md={6}>
                        <p>info</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <InfoImageComponent></InfoImageComponent>
                    </Col>
                </Row>
            </Container>
        </StyledInfo>
    );
};

export default Info;

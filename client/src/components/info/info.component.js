import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoImageComponent from "./infoImage.component";
import InfoTextComponent from "./infoText.component";
import styled from "styled-components";

const StyledInfo = styled.div``;

const Info = () => {
    return (
        <StyledInfo>
            <Container>
                <Row className="flex-column-reverse flex-md-row">
                    <Col className="mt-5" xs={12} md={7}>
                        <InfoTextComponent></InfoTextComponent>
                    </Col>
                    <Col xs={12} md={5} className="pr-0">
                        <InfoImageComponent></InfoImageComponent>
                    </Col>
                </Row>
            </Container>
        </StyledInfo>
    );
};

export default Info;

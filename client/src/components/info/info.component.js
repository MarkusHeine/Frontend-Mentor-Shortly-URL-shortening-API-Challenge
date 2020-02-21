import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoImageComponent from "./infoImage.component";
import InfoTextComponent from "./infoText.component";

const Info = () => {
    return (
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
    );
};

export default Info;

import React from "react";
import { Container, Row } from "react-bootstrap";

const InfoTextComponent = () => {
    return (
        <Container>
            <Row className="d-flex flex-direction-column justify-content-center justify-content-md-start">
                <h1>More than just shorter Links</h1>
                <p>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </p>
                <button className="btn-main btn-pill">Get Started</button>
            </Row>
        </Container>
    );
};

export default InfoTextComponent;

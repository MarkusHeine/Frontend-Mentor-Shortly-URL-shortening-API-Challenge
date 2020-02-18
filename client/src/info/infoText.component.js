import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

const StyledText = styled.div``;

const InfoTextComponent = () => {
    return (
        <StyledText>
            <Container>
                <Row className="d-flex flex-direction-column justify-content-center">
                    <h1>More than just shorter Links</h1>
                    <p>
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <button className="btn-main">Get Started</button>
                </Row>
            </Container>
        </StyledText>
    );
};

export default InfoTextComponent;

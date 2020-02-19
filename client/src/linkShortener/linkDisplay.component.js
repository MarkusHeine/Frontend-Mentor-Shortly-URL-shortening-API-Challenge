import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDisplay = styled.div`
    .border-2 {
        border-width: 2px !important;
    }
`;

const LinkDisplay = ({ link: { hashid, url } }) => {
    const handleClick = () => {
        console.log("copy that shit");
    };

    return (
        <StyledDisplay>
            <Row className="m-1 mb-4 border border-rounded">
                <Container>
                    <Row className="px-3 border-bottom border-2">
                        <p className="text-left text-truncate font-weight-bold text-dark">
                            {url}
                        </p>
                    </Row>
                    <Row className="px-3">
                        <p className="text-left">{`https://rel.ink/${hashid}`}</p>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Button
                            className="btn-main mx-3 btn-width-100  btn-rounded"
                            onClick={handleClick}
                        >
                            Copy
                        </Button>
                    </Row>
                </Container>
            </Row>
        </StyledDisplay>
    );
};

LinkDisplay.propTypes = {
    link: PropTypes.shape({
        url: PropTypes.string,
        hashid: PropTypes.string
    })
};

export default LinkDisplay;

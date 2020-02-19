import React, { useContext, useEffect } from "react";
import { LinkContext } from "./linkContext.provider";
import { Container, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LinkDisplay = ({ link: { url, hashid } }) => {
    const { links } = useContext(LinkContext);

    const handleClick = () => {
        console.log("copy that shit");
    };

    useEffect(() => {
        console.log("props", url, hashid);
    });

    return (
        <Row className="m-1 pt-4 pb-4 mb-4 border border-rounded">
            <Container>
                <Row className="d-flex justify-content-center">
                    <p>{url}</p>
                </Row>
                <Row className="d-flex justify-content-center">
                    <p>{`https://rel.ink/${hashid}`}</p>
                </Row>
                <Row className="d-flex justify-content-center m-1">
                    <Button
                        className="btn-main btn-width-100 mt-3 btn-rounded"
                        onClick={handleClick}
                    >
                        Copy
                    </Button>
                </Row>
            </Container>
        </Row>
    );
};

LinkDisplay.propTypes = {
    link: PropTypes.shape({
        url: PropTypes.string,
        hashid: PropTypes.string
    })
};

export default LinkDisplay;

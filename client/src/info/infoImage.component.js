import React from "react";

import styled from "styled-components";

const StyledImage = styled.div`
    img {
        width: 150%;
    }

    @media (min-width: 720px) {
        img {
            width: 210%;
        }
    }
`;

const InfoImageComponent = () => {
    return (
        <StyledImage>
            <img
                src="../../images/illustration-working.svg"
                alt="illustration working"
                className="d-inline-block align-top"
            ></img>
        </StyledImage>
    );
};

export default InfoImageComponent;

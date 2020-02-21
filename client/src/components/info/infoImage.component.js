import React from "react";

import styled from "styled-components";

const StyledImage = styled.div`
    .img-wrapper {
        overflow-x: hidden;
    }

    img {
        width: 145%;
    }

    @media (min-width: 720px) {
        .img-wrapper {
            overflow: visible;
        }

        img {
            width: 170%;
        }
    }
`;

const InfoImageComponent = () => {
    return (
        <StyledImage>
            <div className="img-wrapper">
                <img
                    src="../../images/illustration-working.svg"
                    alt="illustration working"
                ></img>
            </div>
        </StyledImage>
    );
};

export default InfoImageComponent;

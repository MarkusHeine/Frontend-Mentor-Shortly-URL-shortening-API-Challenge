import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { colors } from "./utils/colors";

const Styles = styled.div`
    .App {
        width: 100vw;
        font-family: "Poppins", sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-x: hidden;
    }

    .btn-main {
        background-color: hsl(180, 66%, 49%);
        padding: 10px 20px !important;
        margin: 10px 0;
        font-family: "Poppins", sans-serif !important;
        color: white !important;
        border: 0;
    }

    .btn-pill {
        border-radius: 50px;
    }

    .btn-rounded {
        border-radius: 0.25em;
    }

    .btn-width-100 {
        width: 100%;
    }

    .bg-grey {
        background-color: #e6e6e6;
    }

    a {
        color: white !important;
        font-weight: 700;
        font-size: 1.2rem;
    }

    h1 {
        text-align: center;
        font-weight: 700;
    }

    p {
        text-align: center;
        color: hsl(0, 0%, 75%);
        font-size: 1.1rem;
        margin: 10px 0;
    }

    @media (min-width: 720px) {
        .App {
            align-items: center;
        }

        .btn-main:active {
            background-color: #80e5e5 !important;
        }

        h1 {
            text-align: left;
            font-size: 5rem;
        }

        p {
            text-align: left;
            font-size: 1.5rem;
        }
    }
`;

const elem = (
    <Styles>
        <App />
    </Styles>
);

ReactDOM.render(elem, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

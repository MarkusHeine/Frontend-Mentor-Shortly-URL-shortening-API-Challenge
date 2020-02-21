import React from "react";
import Header from "./components/header/header.component";
import Info from "./components/info/info.component";
import LinkShortener from "./components/linkShortener/linkShortener.component";
import Features from "./components/features/features.component";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Info></Info>
            <LinkShortener></LinkShortener>
            <Features></Features>
        </div>
    );
}

export default App;

import React from "react";
import Header from "./header/header.component";
import Info from "./info/info.component";
import LinkShortener from "./linkShortener/linkShortener.component";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Info></Info>
            <LinkShortener></LinkShortener>
        </div>
    );
}

export default App;

import React from "react";
import Header from "./components/header/header.component";
import Info from "./components/info/info.component";
import LinkShortener from "./components/linkShortener/linkShortener.component";

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

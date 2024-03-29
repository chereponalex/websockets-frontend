import React from "react";
import "./assets/styles/style.css";
import WsManager from './ws/WsManager'
import Chat from "./components/Chat";
import { MainContainer } from './style';

const App = () => {

    return (
        <>
            <WsManager />
            <MainContainer>
                <Chat />
            </MainContainer >
        </>
    );
};

export default App;
//Imports
import React, { useState } from "react";
import "./style.css";
import { Modal } from "../lib";

//Component of the app
export default function App() {
    const [opened, setOpened] = useState(false);
    function openModal() {
        setOpened(true);
    }

    return (
        <div className="app">
            <button onClick={openModal}>Send form</button>
            <Modal
                opened={opened}
                setOpened={setOpened}
                type="success"
                title="Form sent"
                paddingH={40}
                paddingV={20}
            >
                <p>
                    We have received your answers. Thank you for participating
                    in this survey!
                </p>
            </Modal>
        </div>
    );
}

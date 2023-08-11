//Imports
import React, { useState } from "react";
import "./style.css";
import { Modal } from "../lib";

//Component of the app
export default function App() {
    const [opened, setOpened] = useState(false);

    return (
        <div className="app">
            <button
                onClick={() => {
                    setOpened(true);
                }}
            >
                Open
            </button>
            <Modal
                opened={opened}
                setOpened={setOpened}
                title="Enregistré !"
                paddingH={40}
                paddingV={14}
            >
                <p>L'employé à bien été créé</p>
            </Modal>
        </div>
    );
}

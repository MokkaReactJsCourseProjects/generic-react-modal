# generic-react-modal

Provide simple generic modal components for React.js

## Table of Contents

-   [Installation](#installation)
-   [Features](#features)
-   [Example](#example)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install generic-react-modal
    $ yarn add generic-react-modal

## Features

-   Modal component : renders a modal and its background. You can easily customize the header's title, body's content, body's padding, background opacity, but also choose it's type (default, error, success), display a close button or allow a click on the background to close the modal.
-   ModalBackground component : just renders a background. You can easily customize the opacity and allow a click on it to close the modal it contains.

## Example

A simple example of a generic-react-modal used to show a modal when the user successfully send a form:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "generic-react-modal";

function App() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    function openModal() {
        setModalIsOpen(true);
    }

    return (
        <div>
            <button onClick={openModal}>Send form</button>
            <Modal
                opened={modalIsOpen}
                setOpened={setModalIsOpen}
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

ReactDOM.render(<App />, appElement);
```

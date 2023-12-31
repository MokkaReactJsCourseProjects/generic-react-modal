//Imports
import React from "react";
import { StyledModal, StyledCloseButton } from "./style";
import ModalBackground from "../ModalBackground";

//Types
type ModalProps = {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    type?: "default" | "error" | "success";
    title?: string;
    closeButton?: { alt: string } | boolean;
    backgroundCanClose?: boolean;
    backgroundOpacity?: number;
    paddingH?: number;
    paddingV?: number;
    children?: React.ReactNode;
};

/**
 * A generic modal component that provides various customization options like background opacity,
 * header display with a close button, and customizable body padding.
 *
 * @param {object} props - The properties for the Modal component.
 * @param {boolean} props.opened - The opened state of the modal.
 * @param {function} props.setOpened - A function to set the opened state of the modal.
 * @param {("default" | "error" | "success")} [props.type="default"] - The semantic type of the modal that can changes its appearance.
 * @param {string} [props.title] - The title to be displayed on the modal's header.
 * @param {boolean} [props.closeButton=true] - Determines if a close button should be displayed in the modal's header.
 * @param {boolean} [props.backgroundCanClose=true] - Determines if clicking the background closes the modal.
 * @param {number} [props.backgroundOpacity=0.2] - The opacity of the modal background.
 * @param {number} [props.paddingH=18] - Horizontal padding for the modal's body.
 * @param {number} [props.paddingV=6] - Vertical padding for the modal's body.
 * @param {React.ReactNode} props.children - The child components to render within the modal's body.
 * @returns {React.ReactElement|null} The Modal with its background and content, or null if the modal is not opened.
 */
export default function Modal({
    opened,
    setOpened,
    type = "default",
    title,
    closeButton = true,
    backgroundCanClose = true,
    backgroundOpacity = 0.2,
    paddingH = 18,
    paddingV = 6,
    children,
}: ModalProps): React.ReactElement | null {
    //Displays the header the button, the title or both are shown
    const headerShown = closeButton !== false || title !== undefined;
    //Closes the modal
    function handleClose() {
        setOpened(false);
    }

    //Doesn't render the modal if it's closed
    if (!opened) {
        return null;
    }

    //Does render the modal if it's opened
    return (
        <ModalBackground
            opened={opened}
            setOpened={setOpened}
            backgroundCanClose={backgroundCanClose}
            backgroundOpacity={backgroundOpacity}
        >
            <StyledModal
                type={type}
                paddingh={paddingH}
                paddingv={paddingV}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {headerShown ? (
                    <header>
                        {closeButton !== false ? (
                            <StyledCloseButton onClick={handleClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </StyledCloseButton>
                        ) : null}
                        <h2>{title}</h2>
                    </header>
                ) : null}
                <main>{children}</main>
            </StyledModal>
        </ModalBackground>
    );
}

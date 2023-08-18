//Imports
import React from "react";
import { StyledBackground } from "./style";

//Types
type ModalProps = {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    backgroundCanClose?: boolean;
    backgroundOpacity?: number;
    children?: React.ReactNode;
};

/**
 * A background component for modals that can handle click interactions to close the modal.
 *
 * @param {object} props - The properties of the component.
 * @param {boolean} props.opened - The opened state of the modal it contains.
 * @param {function} props.setOpened - A function to set the opened state of the modal.
 * @param {boolean} [props.backgroundCanClose=true] - Determines if clicking the background closes the modal.
 * @param {number} [props.backgroundOpacity=0.2] - The opacity of the modal background.
 * @param {React.ReactNode} props.children - The modal component to render within the modal background.
 * @returns {React.ReactElement|null} The background component or null if the modal is not opened.
 */
export default function ModalBackground({
    opened,
    setOpened,
    backgroundCanClose = true,
    backgroundOpacity = 0.2,
    children,
}: ModalProps): React.ReactElement | null {
    //Closes the modal
    function handleClose() {
        setOpened(false);
    }

    //Doesn't render the background if the modal is closed
    if (!opened) {
        return null;
    }
    //Does render the background if the modal is opened
    return (
        <StyledBackground
            style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity}` }}
            onClick={() => {
                if (backgroundCanClose) {
                    handleClose();
                }
            }}
        >
            {children}
        </StyledBackground>
    );
}

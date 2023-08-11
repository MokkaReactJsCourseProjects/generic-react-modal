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

//Component of a generic modal background
export default function ModalBackground({
    opened,
    setOpened,
    backgroundCanClose = true,
    backgroundOpacity = 0.2,
    children,
}: ModalProps) {
    function handleClose() {
        setOpened(false);
    }

    if (!opened) {
        return null;
    }
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

//Imports
import React from "react";
import { StyledModal, StyledCloseButton } from "./style";
import ModalBackground from "../ModalBackground";

//Types
type ModalProps = {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    type?: "default" | "error";
    title?: string;
    closeButton?: { alt: string } | boolean;
    backgroundCanClose?: boolean;
    backgroundOpacity?: number;
    paddingH?: number;
    paddingV?: number;
    children?: React.ReactNode;
};

//Component of the generic modal
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
}: ModalProps) {
    const headerShown = closeButton !== false || title !== undefined;
    function handleClose() {
        setOpened(false);
    }

    if (!opened) {
        return null;
    }
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

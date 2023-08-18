//Imports
import styled from "styled-components";

//Types
type StyledModalProps = {
    type: string;
    paddingh: number;
    paddingv: number;
};

//Local styles
export const StyledModal = styled.section<StyledModalProps>`
    background-color: white;
    border-radius: 12px;
    ${({ type }) =>
        type === "error"
            ? `box-shadow: 0 0px 12px red`
            : type === "success"
            ? `box-shadow: 0 0px 12px lime`
            : `box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)`};
    min-width: 10vw;
    max-width: 75vw;
    overflow: hidden;
    header {
        position: relative;
        width: 100%;
        min-height: 32px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 6px 36px;
        border-bottom: 1px lightgray solid;
    }
    main {
        width: 100%;
        padding: ${({ paddingv }) => paddingv}px ${({ paddingh }) => paddingh}px;
    }
`;

export const StyledCloseButton = styled.button`
    position: absolute;
    right: 6px;
    background: none;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    svg {
        width: 24px;
        height: 24px;
    }
    &:hover {
        cursor: pointer;
    }
`;

import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 12px;
    background: ${({ theme }) => theme.COLORS.TOMATO};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;

    &:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
`;
import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 12px;
    background: ${({ theme }) => theme.COLORS.TOMATO};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    
    opacity: ${({ disabled }) => disabled ? .5 : 1};
    pointer-events: ${({ disabled }) => disabled ? 'none' : 'initial'};
    

    &:hover {
        background: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
`;
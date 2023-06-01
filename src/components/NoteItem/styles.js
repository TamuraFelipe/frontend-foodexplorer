import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    background: ${({ theme, isNew }) => isNew ? "tranparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_600}` : "none"};
    
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }
    .button-add {
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > input {
        height: 32px;
        width: 100%;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        padding: 8px;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
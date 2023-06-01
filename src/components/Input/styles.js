import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-bottom: 24px;
    border-radius: 10px;
    gap: 8px;
    
    > input{
        height: 49px;
        width: 100%;
        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border: 0;
        border-radius: 8px;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

    }
    > svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
`;
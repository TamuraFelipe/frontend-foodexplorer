import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > span {

    }
    
    > textarea {
        width: 100%;
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        border: none;
        padding: 12px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        resize: none;
    }

    @media (min-width: 769px){
        grid-template-columns: 1fr!important;
        gap: 8px!important;
        margin-bottom: 24px!important;
    }
`;
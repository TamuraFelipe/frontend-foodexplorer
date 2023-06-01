import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 24px;
    font-size: 16px;
    font-family: 'Roboto';

    > span {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
   
    @media (min-width: 769px) {

        > div {
            font-weight: 700;
            font-size: 20px;
        }
    }
`;
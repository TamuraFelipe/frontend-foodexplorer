import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-bottom: 48px;
    padding-left: 24px;

    > h3 {
        font-weight: 500;
        font-size: 18px;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 18px;
        margin-bottom: 24px;
    }

    @media (min-width: 769px) {
        max-width: 1120px;
        margin-inline: auto;
        padding: 0;

        > h3 {
            font-size: 32px;
        }
    }
`;
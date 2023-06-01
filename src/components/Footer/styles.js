import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_600};
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin-inline: auto;
    width: 100%;
    padding: 30px 28px;

    > a {
        display: flex;
        align-items: center;
        gap: 6px;
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};

    }

    > span {
        font-family: 'Roboto';
        font-size: 12px;
        line-height: 16px;
        text-align: right;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    @media (min-width: 769px) {

        > a {
            font-size: 24px;
        }
        > span {
            font-size: 18px;
        }
    }
`;
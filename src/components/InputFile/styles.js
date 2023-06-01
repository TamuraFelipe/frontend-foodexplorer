import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 24px;
    > span {
        margin-bottom: 8px;
        display: block;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
        display: flex;
        width: 100%;
        height: 49px;
        border-radius: 8px;
        padding: 12px;
        position: relative;
        background: ${({ theme }) => theme.COLORS.DARK_900};
        > label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 400;
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};

            svg {
                path {
                    stroke: ${({ theme }) => theme.COLORS.LIGHT_400};
                }
            }
        }
        > input {
            display: none;
        }
    }
`;
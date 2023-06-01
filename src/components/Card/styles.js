import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    
    @media (min-width: 769px){
        max-width: 1120px;
        margin-inline: auto;
    }
    
`;

export const CardContent = styled.div`
    position: relative;
    background: ${({ theme }) => theme.COLORS.DARK_300};
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_400};
    border-radius: 8px;
    margin-inline: auto;
    padding-block: 24px;

    .btn-edit {
        position: absolute;
        top: 16px;
        right: 16px;
    }
    .link-detail {
        text-align: center;
        img {
            width: 70%;
            display: block;
            margin-inline: auto;
            padding-block: 0 12px;
            border-radius: 50%;
        }
        h3 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin-bottom: 12px;
            padding-inline: 12px;
        }
        p {
            display: none;
            padding-inline: 12px;
        }
        span {
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
            display: block;
            text-align: center;
            margin-bottom: 12px;
        }
    }

    @media (min-width: 769px){
        .link-detail {
            img {
                margin-bottom: 16px;
            }
            h3 {
                font-size: 24px;
                margin-bottom: 16px;
            }
            p {
                display: block;
                font-size: 14px;
                margin-bottom: 16px;
            }
            span {
                font-size: 32px;
                text-align: center;
                margin-bottom: 16px;
            }
        }
    }
`;

export const Quantity = styled.div`
    width: 100%;
    padding-inline: 24px;

    
`;
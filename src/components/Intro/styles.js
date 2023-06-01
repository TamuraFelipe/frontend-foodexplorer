import styled from "styled-components";

export const Container = styled.div`    
    max-width: 1120px;
    min-height: 105px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 44px 0;
    margin-inline: 36px 16px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    border-radius: 3px;
    z-index: -9999;
    margin-bottom: 68px;

    > picture {
        width: 65%;

        img {
            width: 45%;
            position: absolute;
            bottom: 0;
            left: -25px;
        }
    }

    > div {
        h3 {
            font-weight: 600;
            font-size: 18px;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin-bottom: 8px;
        }
        p{
            font-weight: 400;
            font-size: 12px;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    }

    @media (min-width: 576px) {
        margin-top: 90px;
    }

    @media (min-width: 769px){
        margin-inline: auto;
        height: 260px;
        margin-top: 75px;
        

        > picture {
            width: 60%;
            img {
                bottom: -10px;
                left: -45px;
            }
        }

        > div {
            width: 100%;
            text-align: center;

            h3 {
                font-size: 40px;
                font-family: 'Poppins', sans-serif;
            }
            p {
                font-size: 16px;
                font-family: 'Roboto', sans-serif;
            }
        }
    }
    
`;
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    padding-inline: 28px;
    padding-block: 110px 32px;
    height: 100vh;

    > a {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 24px;
        line-height: 140%;
        color: #E1E1E6;
        margin-bottom: 16px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            width: 264px;
            height: 264px;
            display: block;
            margin-inline: auto;
            margin-bottom: 16px;
            border-radius: 50%;
        }

        div {
            h2 {
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 27.0412px;
                line-height: 140%;
                color: #E1E1E6;
                text-align: center;
                margin-bottom: 24px;
            }
            p {
                font-family: 'Poppins';
                font-weight: 400;
                font-size: 16.2247px;
                line-height: 140%;
                text-align: center;
                color: #E1E1E6;
                margin-bottom: 24px;
            }
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 24px;
                margin-bottom: 24px;
                li {
                    font-family: 'Poppins';
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 24px;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #FFFFFF;
                    padding: 4px 8px;
                    background: #192227;
                    border-radius: 5px;
                }
            }
        }
    }

    @media (min-width: 769px){
        max-width: 1120px;
        margin-inline: auto;

        > a {
            margin-top: 24px;
            margin-bottom: 42px;
        }

        > div {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            
            img {
                width: 360px;
                height: 360px;
            }
            div {
                max-width: 686px;

                h2 {
                    text-align: left;
                }
            }
        }
    }
`;
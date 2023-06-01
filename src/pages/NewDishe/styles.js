import styled from "styled-components";

export const Container = styled.section`
   width: 100%;
   padding-inline: 28px;
   padding-block: 110px 32px;

   @media (min-width: 769px) {
    padding-top: 150px;
   }
`;

export const Content = styled.form`
    max-width: 1120px;
    margin-inline: auto;

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 36px;
        font-size: 16px;
    }

    .new-category {
        
        h1 {
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 24px;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            margin-bottom: 40px;
        }
        a {
            margin-bottom: 40px;
        }
        .category-insert {
            display: flex;
            gap: 12px;
            align-items: center;

            input {
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
            button {
                width: max-content;
                padding: 12px;
                background: ${({ theme }) => theme.COLORS.TOMATO};
            }
        }
    }

    > div {
        margin-bottom: 24px;
        span {
            margin-bottom: 8px;
            display: block;
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            color: #C4C4CC;
        }
        select {
            background: ${({ theme }) => theme.COLORS.DARK_900};
            width: 100%;
            height: 49px;
            border-radius: 8px;
            border: none;
            font-family: Roboto, sans-serif;
            color: #C4C4CC;
            font-size: 16px;
            line-height: 16px;
            padding: 12px;
        }
    }

    .box-ingredients {
        display: flex;
        flex-direction: column;
        gap: 8px;
        .ingredients {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
            border-radius: 8px;
            background: ${({ theme }) => theme.COLORS.DARK_900};
            padding: 8px;
            margin-bottom: 24px;
            flex-wrap: wrap;
        }
    }

    @media (min-width: 769px){

        .new-category {
            display: grid;
            grid-template-columns: 1fr 600px;
            h1 {
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 24px;
                line-height: 140%;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                margin-bottom: 0;
            }
            a {
                margin-bottom: 40px;
            }
            .category-insert {
                display: flex;
                gap: 12px;
                align-items: center;

                label {
                    width: 70%;
                }

                input {
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
            }
    }

        > div {
            display: grid;
            grid-template-columns: 230px 1fr 365px;
            gap: 32px;
            margin-bottom: 24px;

            .box-ingredients {
                display: flex;
                flex-direction: column;
                gap: 8px;
                .ingredients {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    width: 100%;
                    border-radius: 8px;
                    background: ${({ theme }) => theme.COLORS.DARK_900};
                    padding: 8px;
                }
            }
        }

        .box-02 {
            grid-template-columns: 840px 1fr;
        }

        > a {
            font-size: 24px;
        }
        > h1 {
            font-size: 32px;
        }
    }
`;


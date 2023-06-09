import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding-top: 104px;
    padding-inline: 30px;
    color: white;

    > h1 {
        margin-top: 32px;
    }

    > ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-block: 32px;
        li {
            display: flex;
            align-items: center;
            gap: 16px;
            img{
                width: 72px;
                height: 72px;
                display: block;
                border-radius: 50%;
            }
            div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                div {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    gap: 8px;
                    p {
                        font-size: 20px;
                    }
                    .mult {
                        display: none;
                    }                    
                }
                .price {
                    display: none;
                }
                .total {
                    display: none;
                }
                .btn-excluir {
                    font-size: 12px;
                    color: ${({ theme }) => theme.COLORS.TOMATO_400};
                }
            }
        }
    }
    .total-lg {
        font-size: 20px;
        margin-bottom: 32px;
        text-align: right;
    }

    @media (min-width: 769px){
        max-width: 1120px;
        margin-inline: auto;

        > h1 {
            margin-top: 32px;
        }
        > ul {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        li {
            div {
                div {
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    gap: 8px;
                    p {
                        font-size: 20px;
                    }
                    .mult {
                        display: block;
                    }                    
                }
                .price {
                    display: block;
                }
                .total {
                    display: block;
                }
                .btn-excluir {
                    font-size: 12px;
                    color: ${({ theme }) => theme.COLORS.TOMATO_400};
                }
            }
        }
        }
        .total-lg {
        text-align: right;
        }
    }
`;
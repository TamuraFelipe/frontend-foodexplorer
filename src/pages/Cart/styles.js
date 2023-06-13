import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    flex-grow: 1;
    padding-top: 104px;
    padding-inline: 30px;
    color: white;

    .pedidos {
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
                .box-btn {
                    display: flex;
                    align-items: center;
                    margin-top: 8px;
                    div {
                        margin-bottom: 0;
                    }
                }
            }
        }
        .total-lg {
            font-size: 20px;
            margin-bottom: 32px;
        }
        button {
            margin-bottom: 32px;
        }
    }
    .pedidos.remove {
        display: none;
    }
    .pagamento {
        display: none;
        
        h1 {
            margin-top: 32px;
            margin-bottom: 32px;
        }
        .box-forma {
            border: 1px solid ${({theme}) => theme.COLORS.LIGHT_200};
            border-radius: 8px;
            .btn-forma {
                border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_200};
                display: flex;
                align-items: center;
                justify-content: space-around;
                position: relative;
                button {
                    width: 50%;
                    height: 90px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                }
                button:hover {
                    background: ${({theme}) => theme.COLORS.DARK_1000};
                    
                }
                button.active {
                    background: ${({theme}) => theme.COLORS.DARK_1000};
                    
                }
                &::after {
                    content: "";
                    width: 1px;
                    height: 90px;
                    background: #fff;
                    position: absolute;
                    left: 50%;
                }
            }

            .box-info {

                .box-pix {
                    img {
                        display: block;
                        margin-inline: auto;
                        margin-block: 32px;
                        width: 40%;
                    }
                    button {
                        margin-bottom: 32px;
                        width: max-content;
                        display: block;
                        margin-inline: auto;
                    }
                }
                .box-credito {
                    form {
                        padding-inline: 32px;
                        margin-top: 32px;
                        button {
                            margin-bottom: 32px;
                            width: max-content;
                            display: block;
                            margin-inline: auto;
                        }
                    }
                }
            }
        }
        
    }
    .pagamento.active {
        display: block;
    }

    @media (min-width: 769px){
        max-width: 1120px;
        margin-inline: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        
        .pedidos {
            > h1 {
                margin-top: 32px;
            }
            > ul {
                display: grid;
                grid-template-columns: 1fr;
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
                            font-size: 12px;
                        }
                        .btn-excluir {
                            font-size: 12px;
                            color: ${({ theme }) => theme.COLORS.TOMATO_400};
                            display: block;
                        }
                    }
                }
            }
            button {
                display: none;
            }
        }
        .pagamento {
            display: block;
            h1 {
                margin-top: 32px;
                margin-bottom: 32px;
            }
            .box-forma {
                border: 1px solid ${({theme}) => theme.COLORS.LIGHT_200};
                border-radius: 8px;
                .btn-forma {
                    border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_200};
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    position: relative;
                    button {
                        width: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 16px;
                        font-size: 18px;
                    }
                    button:hover {
                        background: ${({theme}) => theme.COLORS.DARK_1000};
                        
                    }
                    button.active {
                        background: ${({theme}) => theme.COLORS.DARK_1000};
                        
                    }
                    &::after {
                        content: "";
                        width: 1px;
                        background: #fff;
                        position: absolute;
                        left: 50%;
                    }
                }

                .box-info {

                    .box-pix {
                        img {
                            display: block;
                            margin-inline: auto;
                            margin-block: 32px;
                            width: 40%;
                        }
                        button {
                            margin-bottom: 32px;
                            width: max-content;
                            display: block;
                            margin-inline: auto;
                        }
                    }
                    .box-credito {
                        form {
                            padding-inline: 32px;
                            margin-top: 32px;
                            button {
                                margin-bottom: 32px;
                                width: max-content;
                                display: block;
                                margin-inline: auto;
                            }
                        }
                    }
                }
            }
        }
        button {
            display: none;
        }
    }
`;
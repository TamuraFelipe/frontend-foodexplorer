import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    height: 104px;
    position: fixed;
    z-index: 9999;
    
    
    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 56px 28px 24px;
        position: fixed;

        > a {
            display: none;
        }
        
        > div {
            
            button {
                display: flex;
                align-items: center;
                border: none;
                background: none;
                gap: 16px;
            }
        }

        > h1 {
            a {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 8px;
                font-weight: 700;
                font-size: 22px;
                line-height: 24px;
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            img {
                width: 24px;
                height: 24px;
                display: block;
            }

            p {
                font-family: 'Roboto', sans-serif;
                font-size: 12px;
                line-height: 160%;
                color: ${({ theme }) => theme.COLORS.CAKE_200}
            }
        }

        > .mobileMenu {
            width: 100%;
            transition: all .3s;
            background: ${({ theme }) => theme.COLORS.DARK_700};
                        
            > div {
                margin-top: 32px;
                height: 48px;
                height: 49px;
                margin: 0;
                background: ${({ theme }) => theme.COLORS.DARK_900};
                align-items: center;
                flex-direction: row;
            }

            label {
                display: none;
            }

            ul {
                color: ${({ theme }) => theme.COLORS.WHITE};
                padding-left: 8px;
                width: 100%;

                li {
                    padding: 12px;
                    border-bottom-width: 1px;
                    border-bottom-color: ${({ theme }) => theme.COLORS.DARK_1000};
                    border-bottom-style: solid;

                    a {
                        font-weight: 300;
                        font-size: 24px;
                        line-height: 140%;
                        color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    }
                }
            }
        }
        .closed {
            position: absolute;
            top: 104px;
            left: -768px;
            padding-inline: 28px;
            display: flex;
            gap: 32px;
            flex-direction: column;
            align-items: flex-start;
        }
        .opened {
            position: absolute;
            top: 104px;
            left: 0;
            padding-inline: 28px;
            display: flex;
            gap: 32px;
            flex-direction: column;
            align-items: flex-start;
            height: 100vh;
        }

        > div {
            display: flex;
            align-items: center;
            position: relative;
            
            span {
                position: absolute;
                width: 20px;
                height: 20px;
                background: ${({ theme }) => theme.COLORS.TOMATO};
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${({ theme }) => theme.COLORS.WHITE};
                top: -10px;
                right: -8px;
            }
        }
        button {
            display: none;
        }
        
        @media (min-width: 769px){
            max-width: 1120px;
            right: 0;
            left: 0;
            margin: 0 auto;
            padding: 24px 0;

            > a {
                    background: ${({ theme }) => theme.COLORS.TOMATO};
                    border-radius: 8px;
                    padding: 12px 68px;
                    display: block;
            }
            
            > div {
                display: none;
            }
            .mobileMenu {
                position: unset;
                max-width: 580px;
                justify-content: center;
                
                div {
                    height: 49px;
                    margin: 0;
                    background: ${({ theme }) => theme.COLORS.DARK_900};
                }

                ul {
                    display: none;
                }
            }

            >button {
                display: block;
            }

            > button.tomato {
                background: ${({ theme }) => theme.COLORS.TOMATO};
                color: ${({ theme }) => theme.COLORS.WHITE};
                padding: 12px 68px;
                border: none;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                width: unset;
            }
        }
    }
`;
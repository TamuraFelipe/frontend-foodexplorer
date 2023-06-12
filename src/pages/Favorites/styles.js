import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding-inline: 30px;
    margin-top: 32px;
    color: white;
    padding-top: 104px;
    flex-grow: 1;

    > ul {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        margin-block: 32px;
        li {
            display: flex;
            align-items: center;
            gap: 16px;
            img {
                width: 72px;
                height: 72px;
                display: block;
                border-radius: 50%;
            }
            p {
                font-size: 20px;
            }            
            a {
                color: ${({theme}) => theme.COLORS.TOMATO_400};
                font-size: 12px;
            }
        }
    }

    @media (min-width: 679px){
        max-width: 1120px;
        margin-inline: auto;

        ul {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`;
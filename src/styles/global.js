import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    body {
        background: ${({ theme }) => theme.COLORS.DARK_400};

        -webkit-font-smoothing: antialiased;
        height: 100%;

        
        

    }
    h1 {
        font-family: 'Roboto', sans-serif;
    }
    label {
        font-family: 'Roboto', sans-serif;
        color: #C4C4CC;
        font-size: 16px;
        line-height: 16px;
    }
    input {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        /* color: ${({ theme }) => theme.COLORS.WHITE}; */

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
    button {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        border-radius: 5px;
        font-family: 'Poppins', sans-serif;
        background: none;
        border: none;
    }
    a {
        color: ${({ theme }) => theme.COLORS.WHITE};
        line-height: 24px;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
    }
    ul {
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }
    button:hover, a:hover {
        transition: all .3s;
        cursor: pointer;
    } 
    h3, p {
        font-family: 'Poppins', sans-serif;
    }
    td, th {
        font-family: 'Poppins', sans-serif;
    }
`;

/*
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;
*/
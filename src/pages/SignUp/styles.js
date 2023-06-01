import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 100px 0 73px;

        h1 {
            font-size: 38px;
            font-weight: 700;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    @media (min-width: 769px){
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 108px 30px 0;
        
        > div {
            margin: 0;
            width: 100%;
        }
        > form {
            max-width: 476px;
            width: 100%;
            padding: 64px;
            border-radius: 16px;
            background: ${({ theme }) => theme.COLORS.DARK_700};
        }
    }
`;
export const Form = styled.form`
    width: 100%;
    padding: 0 65px 73px;

    > span {
        display: none;
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 32px;
    }

    > button {
        margin-bottom: 32px;
    }

    a {
        text-align: center;
        display: block;
        font-size: 14px;
        font-weight: 500;
    }

    @media (min-width: 769px){
        span {
            display: block;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 32px;
            line-height: 45px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            margin-bottom: 32px;
        }
    }
`;
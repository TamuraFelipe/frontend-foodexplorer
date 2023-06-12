import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    flex-grow: 1;
    padding-top: 104px;
    padding-inline: 30px;
    margin-bottom: 32px;
    color: white;

    > h1 {
        margin-block: 32px;
    }

    .table {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        align-items: center;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        border-collapse: collapse;
        thead {
            display: none;
        }
        tbody {
            display: flex;
            flex-direction: column;
            gap: 16px;
            tr {
                border-top: 0.8px solid rgb(25, 34, 39);
                border-bottom: 0.8px solid rgb(25, 34, 39);
                border-left: 0.8px solid rgb(25, 34, 39);
                border-right: 0.8px solid rgb(25, 34, 39);
                border-radius: 8px;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr auto 1fr;
                td {
                    padding: 8px;
                    font-size: 16px;
                    &:nth-child(1) {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    &:nth-child(2) {
                        border-left: 0.8px solid rgb(25, 34, 39);
                    }
                    &:nth-child(3) {
                        grid-column: 1/3;
                        border-bottom: 0.8px solid rgb(25, 34, 39);
                        border-top: 0.8px solid rgb(25, 34, 39);
                    }
                }
            }
            .pending {
                        color: red;
                    }
                    .waiting {
                        color: yellow;
                    }
                    .finishing {
                        color: green;
                    }
        }
        
    }

    @media (min-width: 769px){
        max-width: 1120px;
        margin-inline: auto;

        .table {
            width: 100%;
            border: 0.8px solid rgb(25, 34, 39);
            thead {
                width: 100%;
                display: block;
                tr {
                    display: grid;
                    grid-template-columns: 1fr 1fr 3fr 1fr;
                    text-align: left;
                    font-size: 20px;
                    border-bottom: 0.8px solid rgb(25, 34, 39);
                    border-radius: 0;
                    th {
                        padding: 24px 16px;
                        &:nth-child(1) {
                            border-right: 0.8px solid rgb(25, 34, 39);
                        }
                        &:nth-child(2) {
                            border-right: 0.8px solid rgb(25, 34, 39);
                        }
                        &:nth-child(3) {
                            border-right: 0.8px solid rgb(25, 34, 39);
                        }
                    }
                }
            }
            tbody {
                width: 100%;
                gap: 0;
                tr {
                    display: grid;
                    grid-template-columns: 1fr 1fr 3fr 1fr;
                    text-align: left;
                    font-size: 16px;
                    grid-template-rows: initial;
                    border-radius: 0;
                    border-top: none;
                    border-bottom: 0.8px solid rgb(25, 34, 39);
                    border-left: none;
                    border-right: none;
                    &:last-child {
                        border-bottom: none;
                    }
                    td {
                        padding: 24px 16px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        &:nth-child(1) {
                            border-right: 0.8px solid rgb(25, 34, 39);
                        }
                        &:nth-child(2) {
                            border-right: 0.8px solid rgb(25, 34, 39);
                            border-left: none;
                        }
                        &:nth-child(3) {
                            border-right: 0.8px solid rgb(25, 34, 39);
                            border-bottom: none;
                            border-top: none;
                            grid-column: initial;
                        }
                        .mobile {
                            display: none;
                        }
                    }
                }
            }            
        }

    }
`;
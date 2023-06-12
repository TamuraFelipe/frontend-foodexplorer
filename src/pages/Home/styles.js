import styled from "styled-components";

export const Container = styled.section`
    padding-top: 104px;
    color: #fff;

    .swiper {
        
        .swiper-button-next, .swiper-button-prev {
            color: ${({ theme }) => theme.COLORS.TOMATO};
            display: none;
        }
    }
    
    @media (min-width: 769px){
        .swiper {
            .swiper-button-next, .swiper-button-prev {
                width: 5rem;
                top: 18px;
                height: 100%;
                color: ${({ theme }) => theme.COLORS.TOMATO};
                display: flex;
            }
            .swiper-button-prev {
                left: -10px;
                background: linear-gradient(to left, transparent 0%, ${({ theme }) => theme.COLORS.DARK_400} 100% 0%, transparent 100%);
                
                :hover{
                    animation: rightToLeft .3s forwards;
                }
            }
            .swiper-button-next {
                right: -10px;
                background: linear-gradient(to right, transparent 0%, ${({ theme }) => theme.COLORS.DARK_400} 100% 0%, transparent 100%);

                :hover{
                    animation: leftToRight .3s forwards;
                }
            }
        }
    }

    @keyframes leftToRight {
        to{
            transform: translateX(10px);
        }
        from {
            transform: translateX(0);
        }
    }
    
    @keyframes rightToLeft {
        to{
            transform: translateX(-10px);
        }
        from {
            transform: translateX(0);
        }
    }
`;

import React from 'react'

import imgIntro from "../../assets/img-intro.png";
import imgIntroLarge from "../../assets/img-intro-Large.png";

import {
    Container,
} from './styles';

export const Intro = () => {
  return (
    <Container>
        <picture>
            <source media="(min-width: 577px)" srcSet={imgIntroLarge} />
            <img src={imgIntro} alt="Imagem intro" />
        </picture>
        
        <div>
            <h3>Sabores inigualáveis</h3>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
    </Container>
  )
}

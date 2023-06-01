import React from 'react'
import { Link } from 'react-router-dom';

import logoFooter from '../../assets/logo-footer.png';

import {
    Container,
    Content
} from './styles';

export const Footer = () => {
  return (
    <Container>
        <Content>
            <Link to="/">
                <img src={logoFooter} alt="Logo footer" />
                food explorer
            </Link>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Content>
    </Container>
  )
}

import React from 'react'

import {
    Container,
} from './styles';

export const Section = ({ title, children }) => {
  return (
    <Container>
        <h3>{title}</h3>
        {children}
    </Container>
  )
}


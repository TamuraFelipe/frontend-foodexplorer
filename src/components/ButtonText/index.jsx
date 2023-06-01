import React from 'react'

import {
    Container,
} from './styles';

export const ButtonText = ({ icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
        <Icon size={30}/>
    </Container>
  )
}

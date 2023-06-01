import React from 'react'

import {
    Container,
} from './styles';

export const TextArea = ({...rest}) => {
  return (
    <Container>
        <span>Descrição</span>
        <textarea name="description" id="description" cols="30" rows="10" placeholder='Descrição do prato' {...rest}></textarea>
    </Container>
  )
}

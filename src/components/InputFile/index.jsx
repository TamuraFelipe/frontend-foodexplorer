import React from 'react'

import { GrFormUpload } from 'react-icons/gr';

import {
    Container,
} from './styles';

export const InputFile = ({title, ...rest}) => {
  return (
    <Container>
        <span>Imagem do prato</span>
        <div htmlFor='file'>
            <label htmlFor="file"><GrFormUpload size={30} />{title}</label>
            <input type="file" id='file' name='file' {...rest}/>
        </div>
    </Container>
  )
}

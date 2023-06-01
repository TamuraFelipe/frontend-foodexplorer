import React, { useState} from 'react';

import { Button } from '../Button';
import { ButtonText } from '../ButtonText';

import { FiPlus, FiMinus } from 'react-icons/fi';

import {
    Container,
} from './styles'

export const HandleQuantityButton = () => {
    const [qtd, setQtd] = useState(1);

    if(qtd > 8 ) {
    
    }
    
    function decrease(qtd){
        if(qtd === 1){
            setQtd(1);
            return;
        }
        setQtd( qtd - 1)
    }
    function increase(qtd){
        setQtd(qtd + 1)
    }

  return (
    <>
        <Container>
            <ButtonText onClick={ () => decrease(qtd)} icon={FiMinus}/>
            <span style={{ marginBottom: '0'}}>{qtd}</span>
            <ButtonText onClick={ () => increase(qtd)} icon={FiPlus}/>
        </Container>
        <div>
            <Button title='Incluir'/>
        </div>
    </>
  )
}

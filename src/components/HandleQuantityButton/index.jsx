import React, { useState} from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

import { Button } from '../Button';
import { ButtonText } from '../ButtonText';

import { useCart } from '../../hooks/cart';

import {
    Container,
} from './styles'

export const HandleQuantityButton = ({ data }) => {
    const [qtd, setQtd] = useState(1);

    const {addDishesCart} = useCart();
    const {name, image, price} = data;
    
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

    function handleAddDishesCart(){
        addDishesCart({data, quantity: qtd})
    }

  return (
    <>
        <Container>
            <ButtonText onClick={ () => decrease(qtd)} icon={FiMinus}/>
            <span style={{ marginBottom: '0'}}>{qtd}</span>
            <ButtonText onClick={ () => increase(qtd)} icon={FiPlus}/>
        </Container>
        <div>
            <Button 
            title='Incluir'
            onClick={handleAddDishesCart}
            />
        </div>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/cart';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import {
    Container,
} from './styles';
import { HandleQuantityButton } from '../../components/HandleQuantityButton';

export const Cart = () => {
  const { removeDisheCart, cart, total } = useCart();

  function handleRemoveDisheCart(item){
    removeDisheCart(item)
    //console.log(item)
  }

  console.log(total)
  return (
    <>
        <Header disabled/>
        <Container>
          <h1>Meu pedido</h1>
            <ul>
              {
                cart && cart.map( item => 
                  <li key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                      <div>
                        <p className='mult'>{item.quantity} x</p>
                        <p>{item.name}</p>
                      </div>
                      <p className='price'>R$ {item.price}</p>
                      <p className='total'>Total: R$ {item.total.toFixed(2)}</p>
                      
                      
                      <button 
                      className='btn-excluir' 
                      type='button'
                      onClick={ () => handleRemoveDisheCart(item.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </li>
                )
              }
            </ul>
            <Link style={{ marginBottom: '32px', display: 'block', color: 'rgb(171, 77, 85)', textAlign: 'right'}} to="/">Colocar mais produtos no carrinho.</Link>
            <p className='total-lg'>Total do pedido: R${total.toFixed(2).replace(',', '.')}</p>
        </Container>
        <Footer />
    </>
  )
}


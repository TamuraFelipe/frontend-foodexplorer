import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/cart';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import img from '../../assets/qr-code-pix.png';

import {
    Container,
} from './styles';

export const Cart = () => {
  const [payment, setPayment] = useState(true);
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(false);
    
  const { removeDisheCart, cart, total } = useCart();

  function handleClickPix(){
    setPayment(false)
    setCredit(false)
    setPix(true)
  }
  function handleClickCredit(){
    setPayment(false)
    setPix(false)
    setCredit(true)
  }
  function handleClickTogglePage(){
    const pagePedidos = document.querySelector(".pedidos");
    const pagePagamento = document.querySelector(".pagamento");
    pagePedidos.classList.toggle("remove")
    pagePagamento.classList.toggle("active")
  }

  function handleRemoveDisheCart(item){
    removeDisheCart(item)
  }

  return (
    <>
        <Header disabled/>
        <Container>
          <div className='pedidos'>
            <h1>Meu pedido</h1>
            {
              cart.length === 0 ?
              <p style={{marginBlock: '32px'}}>Nenhum produto no carrinho</p>
              :
              <ul>
              {
                cart && cart.map( item => 
                  <li key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                      <div>
                        <p className='mult'>{item.quantity} x</p>
                        <p>{item.name}</p>
                        <p className='total'>R$ {item.total.toFixed(2)}</p>
                      </div>
                      {/* <p className='price'>R$ {item.price}</p> */}
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

            }
            <Link style={{ marginBottom: '16px', display: 'block', color: 'rgb(171, 77, 85)'}} to="/">Colocar mais produtos no carrinho.</Link>
            <p className='total-lg'>Total do pedido: R${total.toFixed(2).replace(',', '.')}</p>

            <Button title='Avançar' onClick={handleClickTogglePage}/>
          </div>
          
          <div className='pagamento'>
            <h1>Pagamento</h1>
            
            <div className='box-forma'>
              <div className='btn-forma'>
                <button onClick={handleClickPix}>PIX</button>
                <button onClick={handleClickCredit}>Cartão de crédito</button>
              </div>
              {
                payment ?
                <p style={{ marginBlock: '32px', textAlign: 'center'}}>Escolha a forma de pagamento</p>
                :
                <div className='box-info'>
                
                {
                  pix ?
                  <div className='box-pix'>
                    <img src={img} alt="" />
                    <Button 
                    onClick={ () => alert("Está função ainda está em desenvolvimento!")} 
                    title='Finalizar Pedido'
                    />
                  </div>
                  : 
                  null
                }
                
                {
                  credit ?
                  <div className='box-credito'>
                    <form>
                      <Input title='Numero do cartão' type='number'/>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px'}}>
                        <Input title='Validade' type='number'/>
                        <Input title='CVC' type='number'/>
                      </div>
                      <Button 
                      onClick={ () => alert("Está função ainda está em desenvolvimento!")} 
                      title='Finalizar Pedido'
                      />
                    </form>
                  </div>
                  :
                  null
                }
              
              </div>
              }
            </div>
            <Button title='Voltar para carrinho' style={{ marginTop: '32px'}} onClick={handleClickTogglePage}/>
          
          </div>
        </Container>
        <Footer />
    </>
  )
}


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdPix, MdCreditCard, MdOutlineShoppingCart } from 'react-icons/md';

import { useCart } from '../../hooks/cart';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import img from '../../assets/qr-code-pix.png';

import {
    Container,
} from './styles';
import { api } from '../../services/api';

export const Cart = () => {
  const [loading, setLoading] = useState(false)
  const [payment, setPayment] = useState(true);
  const [pix, setPix] = useState(false);
  const [credit, setCredit] = useState(false);
    
  const { removeDisheCart, cart, total, resetCart } = useCart();
  const navigate = useNavigate();
  
  

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

  /*Preparando, Aguardando, Finalizado*/
  function createCart(cart) {
    return {
      status: 'Aguardando',
      paymentMethod: pix ? 'pix': 'credit',
      total: total,
      cart: cart.map(item => (
        {
          id: item.id,
          name: item.name,
          quantity: item.quantity
        }
      ))
    }
  }

  async function handleCreateOrder(cart){
    const newOrder = createCart(cart)
    
    await api.post("/orders", newOrder)
    .then(() => {
      setLoading(true);
      setTimeout(() => {    
          alert("Pedido cadastrado com sucesso!");
          navigate(-1);
          resetCart();
      }, 4000);
    })
    .catch(error => {
        if(error.response){
            alert(error.response.data.message);
        } else {
            alert("Não foi possível cadastrar");
        }
    });

    //console.log(newOrder)
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
                <button className={pix ? "active" : ""} onClick={handleClickPix}><MdPix size={30}/><strong>PIX</strong></button>
                <button className={credit ? "active" : ""} onClick={handleClickCredit}><MdCreditCard size={30}/><strong>Crédito</strong></button>
              </div>
              
              {
                payment ?
                <>
                  <MdOutlineShoppingCart size={130} style={{ marginInline: "auto", marginBlock: "32px", display: "block"}}/>
                  <p style={{ marginBlock: '32px', textAlign: 'center'}}>Escolha a forma de pagamento</p>
                </>
                :
                <div className='box-info'>
                
                {
                  pix ?
                  <div className='box-pix'>
                    {
                      loading ? <p>Efetuando Pagamento</p> : <img src={img} alt="" />
                    }
                    {
                      loading ?
                      <Button 
                      onClick={ (e) => {
                        e.preventDefault();
                        handleCreateOrder(cart)
                      }}  
                      title="Finalizando"
                      disabled
                      />
                      : 
                      <Button 
                      onClick={ (e) => {
                        e.preventDefault();
                        handleCreateOrder(cart)
                      }}  
                      title="Finalizar Pedido"
                      />
                    }
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
                      {
                        loading ?
                        <Button 
                        onClick={ (e) => {
                          e.preventDefault();
                          handleCreateOrder(cart)
                        }}  
                        title="Finalizando"
                        disabled
                        />
                        : 
                        <Button 
                        onClick={ (e) => {
                          e.preventDefault();
                          handleCreateOrder(cart)
                        }}  
                        title="Finalizar Pedido"
                        />
                      }
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


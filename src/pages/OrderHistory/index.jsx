import React, { useEffect, useState } from 'react'

import { GrStatusGoodSmall } from 'react-icons/gr';

import {
    Container,
} from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export const OrderHistory = () => {
    const [orders, setOrders] = useState([]);

    const {user} = useAuth();

    function getStatus(status){
        if(status === "Aguardando"){
            return "pending";
        } else if (status === "Preparando") {
            return "waiting";
        } else {
            return "finishing";
        }
    }
    
    useEffect( () => {
        async function fetchOrders(){
            const response = await api.get("/orders");
            const data = response.data;
            
            setOrders(data);
            //console.log(data)
        }
        fetchOrders();
    }, [orders]);
  return (
    <>
        <Header disabled/>
        <Container> 
            <h1>Pedidos</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Código</th>
                        <th>Detalhes</th>
                        <th>Data/Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders && orders.map( order => 
                        <tr key={order.id}>
                            <td><GrStatusGoodSmall className={getStatus(order.status)}/><span>{order.status}</span></td>
                            <td><span className='mobile'><strong>Cód.: </strong></span>0000{order.id}</td>
                            <td style={{ display: "block"}}>{order.dishes.map( dishe => 
                                <span key={dishe.id}>
                                    {dishe.quantity} x {dishe.title}, {" "}
                                </span>
                            )}
                            </td>
                            <td><span className='mobile'><strong>Data e Hora</strong> - </span>{order.created_at}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </Container>
        <Footer />
    </>
  )
}


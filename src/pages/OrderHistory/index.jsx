import React, { useEffect, useState } from 'react'

import { GrStatusGoodSmall } from 'react-icons/gr';

import {
    Container,
} from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Select } from '../../components/Select';

export const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("🔴 Aguardando")
    
    const {user} = useAuth();

    /* 🟠 */
    function getStatus(status){
        if(status === "Aguardando"){
            return "🔴 Aguardando";
        } else if (status === "Preparando") {
            return "🟡 Preparando";
        } else {
            return "🟢 Finalizado";
        }
    }

    
    
    useEffect( () => {
        async function fetchOrders(){
            const response = await api.get("/orders");
            const data = response.data;
            setOrders(data);
        }
        fetchOrders();
    }, [orders]);
  return (
    <>
        <Header disabled/>
        <Container> 
            {
                !user.isAdmin ? 
                <h1>Pedidos</h1>
                :
                <h1>Gerenciar Pedidos</h1>
            }
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
                        orders.length === 0 &&
                        <tr style={{ gridTemplateColumns: '1fr'}}>
                            <td style={{ justifyContent: 'center'}}>
                                {
                                    !user.isAdmin ?
                                    <strong>Você ainda não possui histórico de compras!</strong>
                                    :
                                    <strong>A loja ainda não possui pedidos hoje!</strong>
                                }
                            </td>
                        </tr>
                    }
                    
                    {
                        orders && orders.toReversed().map( order => 
                        <tr key={order.id}>
                            {
                                !user.isAdmin ?
                                <td>{getStatus( order.status )}</td>
                                :
                                <td>
                                    <Select defaultValue={order.status} id={order.id}/>
                                    {/* <select defaultValue={order.status} onChange={ ({target}) => changeStatus( order.id, target.value) }>
                                        <option value="Aguardando">🔴 Aguardando</option>
                                        <option value="Preparando">🟡 Preparando</option>
                                        <option value="Finalizado">🟢 Finalizado</option>
                                    </select> */}
                                </td>
                            }

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


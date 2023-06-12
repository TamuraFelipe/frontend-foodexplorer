import React from 'react'

import { GrStatusGoodSmall } from 'react-icons/gr';

import {
    Container,
} from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const OrderHistory = () => {
  return (
    <>
        <Header />
        <Container> 
            <h1>Pedidos</h1>
            <p style={{ marginBottom: '32px', color: 'orange'}}>(***Página em desenvolvimento. Ainda é uma página estática!)</p>
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
                    <tr>
                        <td><GrStatusGoodSmall className='finishing'/><span>Finalizado</span></td>
                        <td><span className='mobile'><strong>Cód.: </strong></span>00001</td>
                        <td>1 X Prato Feito, 1 X Mini Churros, 1 X Prato Feito, 1 X Mini Churros, 1 X Prato Feito, 1 X Mini Churros,</td>
                        <td><span className='mobile'><strong>Data e Hora</strong> - </span>16/06 às 14:50hrs</td>
                    </tr>
                    <tr>
                        <td><GrStatusGoodSmall className='finishing'/><span>Finalizado</span></td>
                        <td><span className='mobile'><strong>Cód.: </strong></span>00002</td>
                        <td>1 X Prato Feito, 1 X Mini Churros, 1 X Prato Feito, 1 X Mini Churros, 1 X Prato Feito, </td>
                        <td><span className='mobile'><strong>Data e Hora</strong> - </span>16/06 às 15:00hrs</td>
                    </tr>
                    <tr>
                        <td><GrStatusGoodSmall className='waiting'/><span>Preparando</span></td>
                        <td><span className='mobile'><strong>Cód.: </strong></span>00003</td>
                        <td>1 X Prato Feito, 1 X Mini Churros</td>
                        <td><span className='mobile'><strong>Data e Hora</strong> - </span>16/06 às 15:20hrs</td>
                    </tr>
                    <tr>
                        <td><GrStatusGoodSmall className='waiting'/><span>Preparando</span></td>
                        <td><span className='mobile'><strong>Cód.: </strong></span>00003</td>
                        <td>1 X Prato Feito, 1 X Mini Churros</td>
                        <td><span className='mobile'><strong>Data e Hora</strong> - </span>16/06 às 15:20hrs</td>
                    </tr>
                    <tr>
                        <td><GrStatusGoodSmall className='waiting'/><span>Preparando</span></td>
                        <td><span className='mobile'><strong>Cód.: </strong></span>00003</td>
                        <td>1 X Prato Feito, 1 X Mini Churros</td>
                        <td><span className='mobile'><strong>Data e Hora</strong> - </span>16/06 às 15:20hrs</td>
                    </tr>
                </tbody>
            </table>
        </Container>
        <Footer />
    </>
  )
}


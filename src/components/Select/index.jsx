import React from 'react';

import { api } from '../../services/api';

import {
    Container,
} from './styles';

export const Select = ({ defaultValue, id}) => {

    async function changeStatus( id, status ){
        const response = await api.put("/orders", ({id: id, status: status}))
        if(response) alert("Status modificado com sucesso!")
    }

  return (
    <Container defaultValue={defaultValue} onChange={ ({target}) => changeStatus( id, target.value) }>
        <option value="Aguardando">🔴 Aguardando</option>
        <option value="Preparando">🟡 Preparando</option>
        <option value="Finalizado">🟢 Finalizado</option>
    </Container>
  )
}

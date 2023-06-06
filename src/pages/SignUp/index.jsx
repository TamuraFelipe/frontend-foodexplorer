import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import {
  Container,
  Form,
} from './styles';

import logoSvg from '../../assets/logo.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  

  const navigate = useNavigate();

  function handleSignUp(e){
    if(!name || !email || !password){
      alert("Preencha todos os campos!");
      return;
    }
    if(password.length < 6){
      alert("Senha deve ter no mínimo 6 caracteres!")
      return;
    }
    
    setLoading(true)
    api.post("users", { name, email, password })
    .then( () => {
      alert("Usuário cadastrado com sucesso!")
      setLoading(false);
      navigate("/");
    })
    .catch( error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar!");
      }
    })
  }
  
  return (
    <Container>
      <div>
        <img src={logoSvg} alt="Logo do food explorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <span>Crie sua conta</span>
        <Input 
        id="name"
        type="text"
        placeholder="Exemplo: Maria da Silva"
        title="Seu nome"
        onChange={ ({target}) => setName(target.value)}
        />
        <Input 
        id="email"
        type="email"
        placeholder="Exemplo: exemplo@email.com"
        title="E-mail"
        onChange={ ({target}) => setEmail(target.value)}
        />
        <Input 
        id="password"
        type="password"
        placeholder="No mínimo 6 caracteres"
        title="Senha"
        onChange={ ({target}) => setPassword(target.value)}
        />
        {
          loading ? <Button title="Criando" type="button" disabled/> : <Button title="Criar" type="button" onClick={handleSignUp} />
        }
        <a href="/">Já tenho uma conta</a>
      </Form>
    </Container>
  )
}


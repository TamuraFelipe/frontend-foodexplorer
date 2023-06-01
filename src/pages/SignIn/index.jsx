import { useContext } from 'react';
import { useAuth } from '../../hooks/auth';

import logoSvg from '../../assets/logo.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';

import {
  Container,
  Form,
} from './styles';


export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  
  function handleLogin(){
    signIn({
      email,
      password
    });
  };

  return (
    <Container>
      <div>
        <img src={logoSvg} alt="Logo do food explorer" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <span>Faça login</span>
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
        <Button 
        title="Entrar"
        type="button"
        onClick={handleLogin}
        />
        <a href="/register">Criar conta</a>
      </Form>
    </Container>
  )
}


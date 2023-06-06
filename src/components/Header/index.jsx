import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';

import { AiOutlineSearch } from 'react-icons/ai';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import logo from '../../assets/logo.png';

import {
    Container
} from './styles';

export const Header = ({search, disabled}) => {
    const [menuMobile, setMenuMobile] = useState(true);

    const { user, signOut } = useAuth();
    
  return (
    <Container>
        <div>
            <div>
                {
                    menuMobile && menuMobile ?
                    <button onClick={ () => setMenuMobile(false)}>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1ZM0 9C0 8.44772 0.447715 8 1 8H23C23.5523 8 24 8.44772 24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9ZM0 17C0 16.4477 0.447715 16 1 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H1C0.447715 18 0 17.5523 0 17Z" fill="white"/>
                        </svg>
                    </button>
                :
                    <button onClick={ () => setMenuMobile(!menuMobile)}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.263604 0.263604C0.615076 -0.0878679 1.18492 -0.0878679 1.5364 0.263604L9 7.72721L16.4636 0.263604C16.8151 -0.0878679 17.3849 -0.0878679 17.7364 0.263604C18.0879 0.615076 18.0879 1.18492 17.7364 1.5364L10.2728 9L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L9 10.2728L1.5364 17.7364C1.18492 18.0879 0.615076 18.0879 0.263604 17.7364C-0.0878679 17.3849 -0.0878679 16.8151 0.263604 16.4636L7.72721 9L0.263604 1.5364C-0.0878679 1.18492 -0.0878679 0.615076 0.263604 0.263604Z" fill="white"/>
                        </svg>
                            Menu
                    </button>
                }
            </div>
            
            {
                menuMobile && menuMobile ?
                <h1>
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        food explorer {user.isAdmin ? <p>{user.name}</p> : null}
                    </Link>
                </h1>
                :
                null
            }

            
                <div className={`mobileMenu ${menuMobile ? "closed" : "opened"}`}>
                    <Input
                    onChange={ (e) => search(e.target.value)}
                    icon={AiOutlineSearch} 
                    type="text"
                    placeholder="Busque por pratos ou ingredientes"
                    disabled={disabled}
                    />
                    <ul>
                        {
                            user.isAdmin ? <li><Link to="/newdishe">Novo prato</Link></li> : null
                        }
                        <li><Link to="#" onClick={signOut}>Sair</Link></li>
                    </ul>
                </div>
                
                {user.isAdmin ? 
                    <Link to="/newdishe">Novo prato</Link>
                    :
                    <Link to="/cart">Pedidos <span>(0)</span></Link>
                }
                <button type='button' onClick={signOut}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.2891 6.75L23.5391 12M23.5391 12L18.2891 17.25M23.5391 12H9.53906M9.53906 23H2.53906C2.27385 23 2.01949 22.8946 1.83196 22.7071C1.64442 22.5196 1.53906 22.2652 1.53906 22V2C1.53906 1.73478 1.64442 1.48043 1.83196 1.29289C2.01949 1.10536 2.27385 1 2.53906 1H9.53906" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            
            
            
            {
                menuMobile && menuMobile ?
                <div>
                {
                    !user.isAdmin &&
                    <>
                        <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z" fill="white"/>
                        </svg>
                        <span>0</span>
                    </>
                }
                </div>
                :
                null
            }
        </div>
    </Container>
  )
}

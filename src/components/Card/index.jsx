import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi';
import { HandleQuantityButton } from '../HandleQuantityButton';

import { useAuth } from "../../hooks/auth";
import { useCart } from '../../hooks/cart';

import imgPlaceholder from '../../assets/img-placeholder.svg';

import {
    Container,
    CardContent,
    Quantity
} from './styles';

export const Card = ({ data, ...rest }) => {
    const [favorite, setFavorite] = useState(false);

    const navigate = useNavigate();

    const img = data.image ? `${api.defaults.baseURL}/files/${data.image}` : imgPlaceholder;
    
    const { user } = useAuth();
    const { cart } = useCart();

    
    return (
    <Container>
        {
            user.isAdmin ?
                <CardContent>
                    <Link className='btn-edit' to={`/edit/${data.id}`}>
                        <BiEdit size={30}/>
                    </Link>
                    <Link className='link-detail' to={`/details/${data.id}`}>
                        <img src={img} alt="Prato" />
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <span>R$ {data.price}</span>
                    </Link>
                </CardContent>
            :
                <CardContent to={`/details/${data.id}`}>
                    {
                        favorite && favorite ? 
                        <Link className='btn-edit'>
                            <AiFillHeart size={30} color="#750310" onClick={ () => setFavorite(false)} /> 
                        </Link>
                        : 
                        <Link className='btn-edit'>
                            <AiOutlineHeart size={30} onClick={ () => setFavorite(true)} />
                        </Link>
                    }
                    <Link className='link-detail' to={`/details/${data.id}`}>
                        <img src={img} alt="Prato" />
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <span>R$ {data.price}</span>
                    </Link>
                    
                    <Quantity>
                        <HandleQuantityButton image={img} data={data}/>
                    </Quantity>
                </CardContent>
            
                
            }
        
    </Container>
  )
}


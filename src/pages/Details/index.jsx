import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { MdOutlineArrowBackIosNew } from 'react-icons/md'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { HandleQuantityButton } from '../../components/HandleQuantityButton';
import { Footer } from '../../components/Footer';

import {
    Container,
} from './styles';

export const Details = () => {
    const [data, setData] = useState("");
    const params = useParams();

    const { user } = useAuth();

    const navigate = useNavigate();

    const img = data && `${api.defaults.baseURL}/files/${data.image}`;

    function handleEdit(){
        navigate(`/edit/${params.id}`)
    }
        
    useEffect( () => {
        async function fetchDetailDishe(){
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }
        fetchDetailDishe();
    }, []);    

  return (
    <>
        <Header disabled/>
        <Container>
            <Link to="/"><MdOutlineArrowBackIosNew />Voltar</Link>
            {
                data &&
                <>
                    <div key={data.id}>
                        <img src={img} alt="" />
                        <div>
                            <h2>{data.name}</h2>
                            <p>{data.description}</p>
                            <ul>
                                {
                                    data.ingredients && data.ingredients.map( (ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                }
                            </ul>
                            {
                                user.isAdmin && user.isAdmin ?
                                <Button 
                                title='Editar prato'
                                onClick={handleEdit}
                                />
                                :
                                <HandleQuantityButton />
                            }
                        </div>
                    </div>
                </>
            }
        </Container>
        <Footer />
    </>
  )
}

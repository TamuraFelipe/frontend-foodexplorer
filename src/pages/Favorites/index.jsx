import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { useFavorite } from '../../hooks/favorites';

import {
    Container,
} from './styles';

import img from '../../assets/image-2.png';

export const Favorites = () => {
    const [favoritesList, setFavoritesList] = useState([])
    const { removeFavorite } = useFavorite();
    
    useEffect( () => {
        setFavoritesList(JSON.parse(window.localStorage.getItem("@foodExplorer:favorites")))
    }, [favoritesList]);
    
  return (
    <>
        <Header disabled />
        <Container>
            <h1>Meus Favoritos</h1>
            {favoritesList.length > 0 ? 
            <ul>
                {
                    favoritesList && favoritesList.map( item => 
                    <li key={item.id}>
                        <img src={item.img} alt="Imagem" />
                        <div>
                            <p>{item.name}</p>
                            <Link onClick={ () => removeFavorite({id: item.id})}>Remover dos favoritos</Link>
                        </div>
                    </li>
                    )
            }
            </ul> 
            : 
            <p style={{ marginTop: '32px'}}>Sem Favoritos</p>}
            
        </Container>
        <Footer />
    </>
  )
}

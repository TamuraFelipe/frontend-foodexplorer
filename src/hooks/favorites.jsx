import React, { createContext, useContext, useEffect, useState } from 'react'

const FavoriteContext = createContext();

function FavoriteProvider({children}){
    const [favorites, setFavorites] = useState(JSON.parse(window.localStorage.getItem("@foodExplorer:favorites")) || []);

    console.log(favorites)

    function addToFavorite({id, img, name}){
        const item = {
            id: id,
            img: img,
            name: name,
        }
        setFavorites( (prevFavorites) => [...prevFavorites, item])
    }
    
    function removeFavorite({id}){
        setFavorites(favorites.filter( item => item.id !== id))
    }

    useEffect( () => {
        localStorage.setItem("@foodExplorer:favorites", JSON.stringify(favorites))
    }, [favorites]);
  
  return (
    <FavoriteContext.Provider 
    value={
        { 
            addToFavorite,
            removeFavorite,
        }
    }>
        {children}
    </FavoriteContext.Provider>
  )
}

function useFavorite(){
    const context = useContext(FavoriteContext);
    return context;
}

export {
    FavoriteProvider,
    useFavorite,
}
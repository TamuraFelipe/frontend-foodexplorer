import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@foodExplorer:cart")) || [])
  
    //console.log(cart)
  
    function addDishesCart({ data, quantity }){
        const { id, name, price} = data;
        const priceNumber = quantity * Number(price.replace(',', '.'));

        const item = {id, name, price: data.price, total: priceNumber, image: data.image, quantity}

        const itemDup = cart.some( item => item.id === id);
        if(itemDup){
            alert("Esse item já está no carrinho!")
            return;
        }
        
        setCart( prevCart => [...prevCart, item])
    }

    useEffect( () => {
        localStorage.setItem("@foodExplorer:cart", JSON.stringify(cart))
    }, [cart])

  return (
    <CartContext.Provider value={{
        addDishesCart,
        setCart,
        }}>
        {children}
    </CartContext.Provider>
  )
}

function useCart(){
    const context = useContext(CartContext);
    return context;
}

export {
    CartProvider,
    useCart,
}

    

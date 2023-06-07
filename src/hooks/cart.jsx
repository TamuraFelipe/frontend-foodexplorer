import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@foodExplorer:cart")) || [])

      
    function addDishesCart({ data, quantity, image }){
        const { id, name, price } = data;
        const priceNumber = quantity * Number(price.replace(',', '.'));
                
        const item = {id, name, price: price, total: priceNumber, image, quantity}

        const itemDup = cart.some( item => item.id === id);
        if(itemDup){
            alert("Esse item já está no carrinho!")
            return;
        } else {
            alert("Item adicionado ao carrinho!")
        }
        
        setCart( prevCart => [...prevCart, item])
        
    }

    function removeDisheCart(deleted) {
        setCart(prevState => prevState.filter(item => item.id !== deleted))
    }

    
    const total = cart.reduce( (value, item) => {
        return value + Number(item.total)
    }, 0)
    
    
    useEffect( () => {
        localStorage.setItem("@foodExplorer:cart", JSON.stringify(cart));
    }, [cart])

  return (
    <CartContext.Provider value={{
        addDishesCart,
        removeDisheCart,
        setCart,
        cart,
        total,
        
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

    

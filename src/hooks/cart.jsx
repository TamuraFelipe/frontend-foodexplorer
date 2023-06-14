import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@foodExplorer:cart")) || []);
    
          
    function addDishesCart({ data, quantity, image }){
        const { id, name, price } = data;
        const priceNumber = quantity * Number(price.replace(',', '.'));
                
        const item = {id, name, price: price, total: priceNumber, image, quantity}
        
        let timerInterval

        const itemDup = cart.some( item => item.id === id);
        if(itemDup){
            Swal.fire({
            title: 'Este item já está no carrinho!',
            width: '300px',
            icon: 'warning',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
            })
            return;
        } else {
            Swal.fire({
                title: 'Item adicionado com sucesso!',
                width: '300px',
                icon: 'success',
                timer: 3000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        }
        
        setCart( prevCart => [...prevCart, item])
    }

    function removeDisheCart(deleted) {
        setCart(prevState => prevState.filter(item => item.id !== deleted))
    }

    function resetCart(){
        window.localStorage.removeItem("@foodExplorer:cart");
        setCart([]);
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
        resetCart,
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

    

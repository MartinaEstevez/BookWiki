import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    /*
    const getFrom = (id) => {
        return cartList.find(products => products.id === id)
    }

    const isInCart = (id) =>{
        return id === undefined ? undefined : getFrom !== undefined;
    }*/
    const addItem = (products) => {
        /*if(isInCart (products && products.id)) {
            console.log("couldnt load existing products")
            return;
        }*/
            setCartList( [ ...cartList, products ] )
    }

    const emptyCart = () => {
        setCartList( [])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            emptyCart,
            /*getFrom,
            isInCart*/
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

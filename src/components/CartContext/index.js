import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])
    const getCount = (id) => {
       const productInCart = cartList.find(product => product.id === id)
       if (productInCart) {
        return productInCart.quantity
       } else return 0
    }
    const addItem = (product) => {
        // quantity = 0, agregar al carrito con quantity
        if (getCount(product.id) === 0) {
            setCartList( [ ...cartList, product] )
        } else {
            // si la quantity > 0, sumar la quantity
            const index = cartList.findIndex(cartProduct => product.id === cartProduct.id)
            const temporalCartList = [...cartList]
            temporalCartList[index].quantity = cartList[index].quantity + product.quantity
            setCartList([...temporalCartList]) 
        }
    }
    const substractItem = (product) => {
        if (getCount(product.id) > 1) {
            // quantity > 1, resto la quantity
            const index = cartList.findIndex(cartProduct => product.id === cartProduct.id)
            const temporalCartList = [...cartList]
            temporalCartList[index].quantity = cartList[index].quantity - 1
            setCartList([...temporalCartList]) 
        } else {
            // quantity = 1, eliminar del carrito
            const index = cartList.findIndex(cartProduct => product.id === cartProduct.id)
            if (index > -1){
                const temporalCartList = [...cartList]
                temporalCartList.splice(index, 1)
                setCartList([...temporalCartList]) 
            }
        }
        
    }

    const emptyCart = () => {
        setCartList( [])
    }

    const totalPrice = () =>{
        let price = 0
        cartList.forEach(cartProduct => {
            price = price + (cartProduct.price * cartProduct.quantity)
        })
        return price;
    }

    
    return (
        <CartContext.Provider value={{
            cartList,
            addItem,
            emptyCart,
            substractItem,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

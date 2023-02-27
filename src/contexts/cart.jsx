import { createContext, useReducer } from "react";
import { CartReducer, initialState } from "../reducers/cart";


export const CartContext = createContext()

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = product =>
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })

    const removeFromCart = product =>
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })

    const deleteToCart = product =>
        dispatch({
            type: 'DELETE_TO_CART',
            payload: product
        })

    const clearCart = () =>
        dispatch({
            type: 'CLEAR_CART'
        })

    return { state, addToCart, removeFromCart, deleteToCart, clearCart }

}

export const CartProvider = ({ children }) => {
    const { state, addToCart, removeFromCart,clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

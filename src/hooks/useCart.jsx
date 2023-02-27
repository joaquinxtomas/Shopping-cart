import { useContext } from "react";
import { CartContext } from "../contexts/cart";

export const useCart = () =>{
    const context = useContext(CartContext)

    if(context === undefined){
        throw new Error('Hay un error con el cartContext')
    }

    return context

}
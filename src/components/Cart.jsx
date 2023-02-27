import { useId, useState } from 'react'
import { useCart } from '../hooks/useCart'
import { BsCartFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import './Sidebar.css'

export function ItemCart({ image, price, productName, quantity, addToCart }) {
    return (
        <li className='mt-5 w-56 mx-auto'>
            <div className='flex bg-gray-200 rounded opacity-75 hover:opacity-100'>
                <div>
                    <img className='w-20 h-20 object-cover mr-4 m-1 rounded border border-1 border-gray-300' src={image} />
                </div>
                <div className='w-32'>
                    <h2 className='text-base text-center mr-1 mt-1'>{productName}</h2>
                    <p className='text-center mb-1'>${
                    new Intl.NumberFormat().format(price)
                    }</p>
                    <div className='flex justify-center'>
                        <div className='flex items-center'>
                            <button onClick={addToCart} className="bg-gray-300 w-6 h-6 mr-12 rounded  hover:bg-green-500 hover:text-white"><IoIosAdd style={{margin:'auto'}}/></button>
                            <p className='bg-gray-600 text-white w-5 h-5 rounded-full text-center text-sm'>
                                {quantity}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )

}

export const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSideBar = () => {
        setIsOpen(!isOpen)
    }
    const { cart, clearCart, addToCart} = useCart()

    const checkInCart = product => {
        return cart.some(item => item.id === product.id)
    }


    return (
        <>
            <aside className={
                `sidebar ${isOpen ? "open bg-gray-100" : ""}`
            }>
                <button
                    onClick={toggleSideBar}
                    className="sidebar-toggle">
                    {isOpen ? <AiOutlineArrowRight/> : <BsCartFill/>}
                </button>
                <p className='text-center font-semibold mt-3'>Products in cart</p>
                <ul className='cart'>
                    {
                        cart.map(product => (
                            <ItemCart
                                key={product.id}
                                addToCart={() =>
                                    addToCart(product)
                                }
                                {...product}
                            />
                        ))
                    }
                    {
                        cart.length > 0 ? <button onClick={clearCart} className=" flex items-center justify-center w-56 mx-auto bg-gray-200 mt-3 rounded p-1  hover:bg-gray-300 font-semibold">Vaciar carrito<BsFillTrashFill/></button> : <p className='text-center mt-4 bg-gray-200 p-1'>
                            You have no items in your shopping cart
                        </p>
                    }
                </ul>
            </aside>

        </>
    )
}
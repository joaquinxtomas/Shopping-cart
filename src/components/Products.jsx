
import { useCart } from '../hooks/useCart'
import { useState } from 'react'
import '../index.css'
import { Filters } from "./Filters";
import LikeButton from "./LikeButton";

export const Products = ({ products }) => {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-8 px-4  sm:px-6 lg:max-w-7xl lg:px-8">
                <Filters />
                <div className="grilla grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                        products.map(product => {
                            const isInCart = checkInCart(product)

                            return (
                                <a href="#" className="group border-2 rounded hover:border-gray-300 cursor-default product-container">
                                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden   xl:aspect-w-7 xl:aspect-h-8">
                                        <img src={product.image} alt={product.productName} class="product-image w-full object-cover opacity-75 object-center group-hover:opacity-100" />
                                    </div>
                                    <h3 className="mt-4 w-full text-center text-sm text-gray-700 opacity-75">{product.productName}
                                    </h3>
                                    <p className="mt-1 font-medium text-gray-900 p-1 text-xl text-center">${
                                        new Intl.NumberFormat().format(product.price)
                                    }</p>
                                    <div className='flex justify-around items-center mt-4 mb-4'>
                                        <LikeButton />
                                        <button className={
                                            isInCart ?
                                                "bg-red-500 pr-3 pl-3 rounded text-white font-semibold"
                                                : "bg-blue-300 pr-3 pl-3 rounded hover:bg-blue-400 font-semibold"
                                        } onClick={() => {

                                            isInCart ?
                                                removeFromCart(product)
                                                : addToCart(product)
                                        }}>
                                            {
                                                isInCart ?
                                                    "Remove"
                                                    : "Add"
                                            }
                                        </button>
                                    </div>
                                </a>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )

}

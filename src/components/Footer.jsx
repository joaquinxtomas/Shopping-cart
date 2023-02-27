import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <aside className='flex w-full justify-around h-16 bg-gray-200 items-center'>
            <div>
                <h1 className='text-lg '>Joaquín Palacios</h1>
            </div>
            <div className='flex w-16 justify-between'>
                <a href='https://www.linkedin.com/in/joaquinpalacios/' target='_blank' className='text-gray-700 hover:text-blue-800'><BsLinkedin style={{fontSize:'27px'}}/></a>

                <a href='https://github.com/joaquinxtomas' target='_blank' className='text-gray-700 hover:text-black'><BsGithub style={{fontSize:'27px'}}/></a>
            </div>
        </aside>
    )
}

export default Footer
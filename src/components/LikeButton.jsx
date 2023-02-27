import React, {useState} from 'react'
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
    const [like, setLike] = useState(false)

    const toggle = () => {
        setLike(!like)
    }

    return (
        <div>
            <button onClick={toggle} className={
                like ? 'border-2 border-gray-300 p-1 rounded-full text-red-500' : 'border-2 border-gray-300 p-1 rounded-full text-gray-300'
            }><FaHeart style={{ 'fontSize': '25px', "padding": '2px' }} /></button>
        </div>
    )
}

export default LikeButton
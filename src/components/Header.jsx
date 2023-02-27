import { FaReact } from "react-icons/fa";
import './Header.css'

export const Header = () => {
    return (
        <div className="bg-gray-100 h-16 flex items-center header">
            <div className="flex items-center ml-3">
                <p className="border border-1 border-black p-1 rounded-full shadow-xl shadow-gray-400"><FaReact style={{fontSize:'20px'}}/></p>
                <h2 className="uppercase ml-3 font-semibold">e-commerce</h2>
            </div>
        </div>
    )
}
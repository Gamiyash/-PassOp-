import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' flex flex-col justify-center items-center bg-slate-800 text-white '>

            <div className="logo font-bold text-2xl ">

                <span className='text-green-500 '>&lt;</span>
                <span>Pass</span>
                <span className='text-green-500 '>OP/ &gt;</span>

            </div>

            <div className='flex gap-3 items-center justify-center text-xl'>
                Created with <span className='text-red-600'><FaHeart /></span> By Yash Gami
            </div>
        </div>
    )
}

export default Footer

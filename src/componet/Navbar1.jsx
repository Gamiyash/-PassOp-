import React from 'react'

const Navbar1 = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between px-4 items-center h-14 py-5">
                <div className="logo font-bold text-2xl">

                    <span className='text-green-500 '>&lt;</span>
                    <span>Pass</span>
                    <span className='text-green-500 '>OP/ &gt;</span>

                </div>
                <ul className=''>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="/">About</a>
                        <a className='hover:font-bold' href="/">Contact</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar1

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [nav, setnav] = useState(true)
    return (
        <> 
            <div className='p-4 mx-auto flex justify-between text-white   md:py-4 md:px-4 bg-gradient-to-b from-black to-gray-800  lg:text-xl shadow-gray-400'>
                <div>
                    <Link to={'/'} className='md:text-xl hover:scale-125 px-4 '>Movies</Link>
                </div>
                <div>

                    <h2 className='bg-white px-3  sm:px-8 rounded-lg text-gray-800 flex justify-center items-center gap-4'>
                        <span >
                            <FaSearch color='black' />
                        </span>
                        <span >
                            <div className='px-5'>
                                search
                            </div>
                        </span> </h2>
                    {/* search */}
                </div>
                <div className='md:hidden'>
                    <GiHamburgerMenu />
                </div>
                <div>
                    <ul className=' gap-8 hidden md:flex'>
                        <li className='hover:scale-125 hover:text-gray-200' >Login</li>
                        <li className='hover:scale-125 hover:text-gray-200'>Register</li>
                        <li className='hover:scale-125 hover:text-gray-200'>Movies</li>
                        <li className='hover:scale-125 hover:text-gray-200'>Web Series</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
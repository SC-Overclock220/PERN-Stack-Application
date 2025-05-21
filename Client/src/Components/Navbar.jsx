import React from 'react'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-md sm:text-lg md:text-xl">POSTGRES CRUD</a>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="input input-bordered w-48 md:w-auto" />
                    <button className='btn btn-primary text-white'><FaSearch className='w-5 h-5 ' /></button>

                </div>
            </div>

        </>
    )
}

export default Navbar
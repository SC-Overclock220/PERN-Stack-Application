import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-md xl:text-lg">Postgres CRUD</a>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-auto lg:w-36 xl:w-48 " />
                <button className='btn btn-primary text-white'><FaSearch className='h-5 w-5  ' /></button>

            </div>
        </div>
    )
}

export default Navbar
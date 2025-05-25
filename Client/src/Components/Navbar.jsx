import React, { useContext } from 'react'
import { FaRedoAlt, FaSearch } from 'react-icons/fa'
import { BikeContext } from '../Context/Bike.Context'

const Navbar = () => {


    const contextData = useContext(BikeContext);
    const { searchQuery, setSearchQuery, handleSearchQuery } = contextData;

    const handleInputChange = (e) => {


        const { name, value } = e.target;
        console.log(value);
        setSearchQuery(value);



    }
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-md xl:text-lg">Postgres CRUD</a>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-auto lg:w-36 xl:w-48 " name='searchQuery' onChange={(e) => handleInputChange(e)} value={searchQuery} />
                <button className='btn btn-primary text-white' onClick={handleSearchQuery}><FaSearch className='h-5 w-5  ' /></button>
                <button className='btn btn-warning text-white' onClick={() => window.location.reload()}><FaRedoAlt className='h-5 w-5' /></button>

            </div>
        </div>
    )
}

export default Navbar
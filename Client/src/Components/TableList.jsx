import React, { useContext } from 'react'
import { BikeContext } from '../Context/Bike.Context'
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

const TableList = () => {


    const contextData = useContext(BikeContext);
    const { bikes, handleOpenModal, fetchData, bikeData, modalMode, deleteBike } = contextData;

    if (modalMode === 'edit')
        console.log(bikeData);
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Model Name</th>
                        <th>Manufacturer Name</th>
                        <th>Engine Displacment</th>
                        <th>Transmission</th>
                        <th>Gearbox</th>
                        <th>Tank Capacity</th>
                        <th>Power</th>
                        <th>Torque</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>


                    {bikes && bikes.length ? bikes.map((bike, index) => (<tr key={index + 1}>
                        <th>{index + 1}</th>
                        <td className='uppercase'>{bike.modelname}</td>
                        <td className='uppercase'>{bike.manufacturername}</td>
                        <td>{`${bike.enginedisplacement} CC`}</td>
                        <td className='capitalize'>{bike.transmission}</td>
                        <td>{`${bike.gearbox} Speed Manual`}</td>
                        <td>{`${bike.tankcapacity} Litres`}</td>
                        <td>{`${bike.power} BHP`}</td>
                        <td>{`${bike.torque} Nm`}</td>
                        <td>{bike.price && !isNaN(bike.price)
                            ? Number(bike.price).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
                            : 'N/A'}</td>
                        <td className='flex space-x-2'>
                            <button className='btn btn-warning text-white' onClick={() => [handleOpenModal('edit'), fetchData(index)]}><FaPencilAlt /></button>
                            <button className='btn btn-secondary' onClick={() => deleteBike(bike.id)}><FaTrash /></button>
                        </td>

                    </tr>)) : <tr >

                        <td colSpan={11} className='text-center'><h3 className='text-4xl mt-2 text-center'>No Data To Display</h3></td></tr>}


                </tbody>
            </table>
        </div>
    )
}

export default TableList
import React from 'react'
import { FaPen, FaTrash } from "react-icons/fa";

const TableList = ({ handleOpenModal }) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-zebra mx-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Model Name</th>
                            <th>Manufacturer Name</th>
                            <th>Engine Displacement</th>
                            <th>Transmission</th>
                            <th>Gearbox</th>
                            <th>Tank Capacity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>SP Shine</td>
                            <td>Honda</td>
                            <td>124.9</td>
                            <td>Manual</td>
                            <td>5</td>
                            <td>11</td>
                            <td>111400</td>
                            <td className='flex space-x-2'>

                                <button className='btn btn-warning text-white' onClick={() => handleOpenModal('edit')}><FaPen className='h-4 w-4' /></button>
                                <button className='btn btn-secondary text-white'><FaTrash className='h-4 w-4' /></button>

                            </td>
                        </tr>
                        {/* row 2 */}

                    </tbody>
                </table>
            </div>


        </>
    )
}

export default TableList
import React, { useContext } from 'react'
import { BikeContext } from '../Context/Bike.Context'

const ModalForm = () => {


    const contextData = useContext(BikeContext);
    const { handleOpenModal, handleCloseModal, openModalForm, modalMode, handleSubmit, bikeData, setBikeData } = contextData;


    const handleInputChange = (e) => {


        const { name, value } = e.target;

        setBikeData({ ...bikeData, [name]: value });


    }
    return (
        <>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-success" onClick={() => handleOpenModal('add')}   >Add Bike</button >
            <dialog id="my_modal_3" className="modal" open={openModalForm}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg capitalize text-center"> {`${modalMode} Entry`}</h3>
                    <form method="dialog" onSubmit={(e) => handleSubmit(e)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => handleCloseModal()}>✕</button>

                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='modelName'>Model Name</label>
                            <input type='text' name='modelName' id='modelName' value={bikeData.modelName} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='manufacturerName'>Manufacturer Name</label>
                            <input type='text' name='manufacturerName' id='manufacturerName' value={bikeData.manufacturerName} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='engineDisplacement'>Engine Displacement</label>
                            <input type='number' name='engineDisplacement' id='engineDisplacement' value={bikeData.engineDisplacement} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='transmission'>Transmission</label>
                            <input type='text' name='transmission' id='transmission' value={bikeData.transmission} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>

                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='gearbox'>Gearbox</label>
                            <input type='number' name='gearbox' id='gearbox' value={bikeData.gearbox} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='tankCapacity'>Tank Capacity</label>
                            <input type='number' name='tankCapacity' id='tankCapacity' value={bikeData.tankCapacity} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='power'>Power</label>
                            <input type='number' name='power' id='power' value={bikeData.power} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='torque'>Torque</label>
                            <input type='number' name='torque' id='torque' value={bikeData.torque} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>
                        <div className='flex flex-col space-y-2 my-2 border border-white'>


                            <label htmlFor='price'>Price</label>
                            <input type='number' name='price' id='price' value={bikeData.price} onChange={handleInputChange} className='py-1 text-white capitalize' />
                        </div>

                        <div className='flex justify-around space-x-1 md:space-x-2 lg:space-x-3'>


                            <button className="btn btn-success capitalize" type='submit'>{`${modalMode} Entry`}</button>
                            <button className="btn btn-secondary" onClick={() => handleCloseModal()}>Close</button>
                        </div>
                    </form>

                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>




        </>
    )
}

export default ModalForm
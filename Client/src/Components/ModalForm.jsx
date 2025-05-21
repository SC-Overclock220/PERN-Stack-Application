import React, { useState } from 'react'

const ModalForm = ({ openModalForm, modalMode, handleOpenModal, handleCloseModal, fetchData }) => {


  const [bikeData, setBikeData] = useState(modalMode === 'edit' ? fetchData : {

    modelName: "",
    manufacturerName: "",
    engineDisplacement: "",
    transmission: "",
    tankCapacity: "",
    gearbox: 0,
    price: ""
  })

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setBikeData({ ...bikeData, [name]: value });

  }

  return (
    <>


      <button className="btn btn-primary ml-2" onClick={() => handleOpenModal('add')}>Add Entry</button>
      <dialog id="my_modal_3" className="modal" open={openModalForm} >

        <div className="modal-box">
          <h3 className='font-bold text-2xl py-4 text-center'>{`${modalMode?.toUpperCase()} Entry`}</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal} >✕</button>


            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='modelName'>Model Name</label>
              <input type='text' id='modelName' placeholder='Enter Model Name' className='py-2' name="modelName" value={bikeData.modelName} onChange={handleInputChange} />

            </div>
            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='manufacturerName'>Manufacturer Name</label>
              <input type='text' id='manufacturerName' placeholder='Enter Manufacturer Name' className='py-2' value={bikeData.manufacturerName} onChange={handleInputChange} name="manufacturerName" />

            </div>
            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='engineDisplacement'>Engine Displacement</label>
              <input type='number' id='engineDisplacement' placeholder='Enter Engine Displacement' className='py-2' value={bikeData.engineDisplacement} onChange={handleInputChange} name="engineDisplacement" />

            </div>
            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='transmission'>Transmission</label>
              <input type='text' id='tranmission' placeholder='Enter Transmission' className='py-2' value={bikeData.transmission} onChange={handleInputChange} name="transmission" />

            </div>
            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='gearbox'>Gearbox</label>
              <input type='text' id='gearbox' placeholder='Enter Gearbox' className='py-2' value={bikeData.gearbox} onChange={handleInputChange} name="gearbox" />

            </div>
            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='tankCapacity'>Tank Capacity</label>
              <input type='number' id='tankCapacity' placeholder='Enter Transmission' className='py-2' value={bikeData.tankCapacity} onChange={handleInputChange} name="tankCapacity" />

            </div>
            <div className='flex flex-col space-y-1 my-2'>
              <label htmlFor='price'>Price</label>
              <input type='number' id='price' placeholder='Enter Price' className='py-2' value={bikeData.price} onChange={handleInputChange} name="price" />

            </div>

            <button className='btn btn-success text-white font-bold' type='submit'>{modalMode === 'edit' ? 'Save Changes' : "Add Entry"}</button>
          </form>
          <p className="py-4">Click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  )
}

export default ModalForm
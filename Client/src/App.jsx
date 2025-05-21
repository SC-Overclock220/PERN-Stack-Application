import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import TableList from './Components/TableList'
import ModalForm from './Components/ModalForm'

const App = () => {


  const [openModalForm, setOpenModalForm] = useState(false);
  const [modalMode, setModalMode] = useState(null);


  const handleOpenModal = (mode) => {


    setModalMode(mode);
    setOpenModalForm(true);


  }


  const handleCloseModal = () => {

    setModalMode(null);
    setOpenModalForm(false);
  }


  const handleSubmit = () => {

    if (modalMode === 'edit') {


    }
    else {


    }

  }


  return (
    <div>

      <Navbar />
      <TableList handleOpenModal={handleOpenModal} />
      <ModalForm openModalForm={openModalForm} modalMode={modalMode} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />


    </div>
  )
}

export default App
import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const BikeContext = createContext();

const baseURL = import.meta.env.VITE_BASE_URL;

const BikeContextProvider = ({ children }) => {


    const [bikes, setBikes] = useState([]);
    const [openModalForm, setOpenModalForm] = useState(false);
    const [modalMode, setModalMode] = useState(null);
    const [bikeData, setBikeData] = useState(modalMode === 'edit' ? () => fetchData(index) : { id: 0, modelName: "", manufacturerName: "", engineDisplacement: 0, transmission: "", gearbox: 0, tankCapacity: 0, power: 0, torque: 0, price: 0 });

    const [searchQuery, setSearchQuery] = useState("");



    const handleSearchQuery = async (e) => {

        e.preventDefault();


        try {

            const { data } = await axios.post(`${baseURL}/searchBike`, { searchQuery: searchQuery.toLowerCase() });
            console.log(data);
            setBikes(data.rows);

        } catch (error) {

            console.log(error);
            throw new Error(error.message);

        }



    }


    const handleSubmit = async (e) => {


        console.log(`Modal Mode - ${modalMode}`)


        e.preventDefault();


        try {

            if (modalMode === 'edit') {


                const { data } = await axios.put(`${baseURL}/updateBikes/${bikeData.id}`, bikeData)
                console.log(data);



            }
            else {

                const { data } = await axios.post(`${baseURL}/createBikes`, bikeData)
                console.log(data);


            }


            window.location.reload();
            return;

        } catch (error) {


            console.log(error);
            throw new Error(error.message)

        }


    }


    const handleOpenModal = (mode) => {


        setModalMode(mode);
        setOpenModalForm(true);
    }


    const handleCloseModal = () => {

        setModalMode(null);
        setOpenModalForm(false);


    }



    const getAllBikes = async () => {


        try {

            const { data } = await axios.get(`${baseURL}/getBikes`);
            console.log(data);

            setBikes(data.rows);

        } catch (error) {

            console.log(error);
            throw new Error(error.message);

        }

    }


    const deleteBike = async (index) => {



        try {

            const { data } = await axios.delete(`${baseURL}/deleteBikes/${index}`)
            console.log(data);


        } catch (error) {

            console.log(error);
            throw new Error(error.message)

        }
        window.location.reload();
        return;




    }

    function fetchData(index) {

        try {


            const data = bikes[index];
            console.log(data);
            setBikeData({ ...data, modelName: data.modelname, manufacturerName: data.manufacturername, engineDisplacement: data.enginedisplacement });

            return;


        } catch (error) {

            console.log(error);
            throw new Error(error.message)

        }
    }





    useEffect(() => {

        getAllBikes();
    }, [])




    return <BikeContext.Provider value={{ bikes, handleOpenModal, handleCloseModal, modalMode, openModalForm, handleSubmit, bikeData, fetchData, setBikeData, deleteBike, setSearchQuery, handleSearchQuery, searchQuery }}>

        {children}
    </BikeContext.Provider>
}

export default BikeContextProvider;
import { db } from "../Config/Connect2DB.js";
import deleteBike from "../DB/DeleteBike.DB.js";

const deleteBikes = async (req, res) => {



    const { id } = req.params;


    try {


        const data = await db.query(deleteBike(id));
        console.log(data);

        return res.status(200).json({ message: `Data Deleted Successfully`, success: true });

    } catch (error) {

        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });

    }


}


export default deleteBikes;
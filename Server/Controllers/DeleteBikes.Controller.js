import { db } from "../Config/Connect2DB.js";
import deleteBike from "../DB/DeleteBike.DB.js";

const deleteBikes = async (req, res) => {



    const { id } = req.params;


    try {


        const data = await db.query(deleteBike(id));
        console.log(data);

        if (data.rowCount === 0)
            return res.status(400).json({ message: `No Entries Found With The Given ID`, success: false });

        return res.status(200).json({ message: `Data Deleted Successfully`, success: true });

    } catch (error) {

        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });

    }


}


export default deleteBikes;
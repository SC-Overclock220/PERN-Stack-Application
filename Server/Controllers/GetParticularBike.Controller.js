import { db } from "../Config/Connect2DB.js";
import getOneParticularBike from "../DB/GetParticularBike.DB.js";

const getParticularBike = async (req,res) => {


    const { id } = req.params;


    try {


        const data = await db.query(getOneParticularBike(id));
        console.log(data);

        if (data.rowCount === 0)
            return res.status(400).json({ message: `No Entries Found With The Given ID`, success: false });

        return res.status(200).json({ message: `Data Fetched Successfully`, success: true, bike: data.rows[0] });

    } catch (error) {

        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });

    }

}

export default getParticularBike;
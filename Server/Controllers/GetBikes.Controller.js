import { db } from "../Config/Connect2DB.js";
import getAllBikes from "../DB/GetBikes.DB.js";


const getBikes = async (req, res) => {



    try {


        const data = await db.query(getAllBikes());
        console.log(data.rows);

        return res.status(200).json({ rows: data.rows, success: true })

    } catch (error) {

        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });

    }


}

export default getBikes;
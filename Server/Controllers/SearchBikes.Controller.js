import { db } from "../Config/Connect2DB.js";
import searchBikes from "../DB/SearchBike.DB.js";

const searchBike = async (req, res) => {


    const { searchQuery } = req.body;

    if (!searchQuery)
        return res.status(400).json({ message: `Search Query Cannot Be Empty`, success: false })


    try {

        console.log(searchQuery);



        const data = await db.query(searchBikes(searchQuery));


        return res.status(200).json({ message: 'Search Returned Results', success: true, rows: data.rows });

    } catch (error) {

        console.log(error);
        throw new Error(error.message);

    }


}


export default searchBike;
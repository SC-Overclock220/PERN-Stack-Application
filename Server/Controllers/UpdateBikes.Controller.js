import { db } from "../Config/Connect2DB.js";
import updateBike from "../DB/UpdateBike.DB.js";

const updateBikes = async (req, res) => {


    const { id } = req.params;


    const { modelName, manufacturerName, engineDisplacement, transmission, gearbox, tankCapacity, price, power, torque } = req.body;
    try {


        const data = await db.query(updateBike, [modelName ? String(modelName).toLowerCase() : null, manufacturerName ? String(manufacturerName).toLowerCase() : null, engineDisplacement ? Number(engineDisplacement) : null, transmission ? String(transmission).toLowerCase() : null, gearbox ? Number(gearbox) : null, tankCapacity ? Number(tankCapacity) : null, price ? Number(price) : null, power ? Number(power) : null, torque ? Number(torque) : null, id]);

        if (data.rowCount === 0)
            return res.status(400).json({ message: `No Entries Found With The Given ID`, success: false });


        return res.status(200).json({ message: `Entry Updated Successfully`, success: true, updatedData: data.rows[0] });

    } catch (error) {


        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });


    }

}

export default updateBikes;
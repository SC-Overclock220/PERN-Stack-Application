import { db } from "../Config/Connect2DB.js";
import createBike from "../DB/CreateBike.DB.js";

const createBikes = async (req, res) => {


    const { modelName, manufacturerName, engineDisplacement, transmission, gearbox, tankCapacity, price, power, torque } = req.body;

    if (!modelName || !manufacturerName || !engineDisplacement || !transmission || !gearbox || !tankCapacity || !price || !power || !torque)
        return res.status(400).json({ message: `None Of The Required Fields Can Be Empty`, success: false });


    try {


        const newBike = await db.query(createBike(String(modelName).toLowerCase(), String(manufacturerName).toLowerCase(), Number(engineDisplacement), String(transmission).toLowerCase(), Number(gearbox), Number(tankCapacity), Number(price), Number(power), Number(torque)));


        console.log(newBike);

        return res.status(201).json({ message: 'New Bike Created Successfully', success: false });

    } catch (error) {

        console.log(error);
        return res.status(500).json({ success: false, message: `Internal Server Error` });

    }
}

export default createBikes;
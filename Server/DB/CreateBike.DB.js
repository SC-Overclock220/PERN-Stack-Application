const createBike = (modelName, manufacturerName, engineDisplacement, transmission, gearbox, tankCapacity, price, power, torque) => {


    return `INSERT INTO Bikes (modelName,manufacturerName,engineDisplacement,transmission,gearbox,tankCapacity,price,power,torque)
VALUES ('${modelName}','${manufacturerName}',${engineDisplacement},'${transmission}',${gearbox},${tankCapacity},${price},${power},${torque});`


}

export default createBike;
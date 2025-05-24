const getOneParticularBike = (id) => {


    return `SELECT *  FROM Bikes WHERE id =${id};`


}

export default getOneParticularBike;
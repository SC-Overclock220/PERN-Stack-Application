const searchBikes = (searchQuery) => {


    return `SELECT * FROM Bikes WHERE modelName ILIKE '%${searchQuery}%' OR manufacturerName ILIKE '%${searchQuery}%'`

}
export default searchBikes;



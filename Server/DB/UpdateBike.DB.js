const updateBike = `UPDATE Bikes 
SET 
modelName=COALESCE($1,modelName),
manufacturerName=COALESCE($2,manufacturerName),
engineDisplacement = COALESCE($3,engineDisplacement),
transmission=COALESCE($4,transmission),
gearbox=COALESCE($5,gearbox),
tankCapacity=COALESCE($6,tankCapacity),
price=COALESCE($7,price),
power=COALESCE($8,power),
torque=COALESCE($9,torque)
WHERE id=$10
RETURNING *;
`;


export default updateBike;
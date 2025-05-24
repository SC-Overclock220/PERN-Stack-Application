CREATE TABLE
    IF NOT EXISTS Bikes (
        id SERIAL PRIMARY KEY,
        modelName VARCHAR(50) NOT NULL,
        manufacturerName VARCHAR(50) NOT NULL,
        engineDisplacement INTEGER NOT NULL,
        transmission VARCHAR(10) NOT NULL CHECK (transmission IN ('manual', 'automatic')),
        gearbox INTEGER NOT NULL,
        tankCapacity INTEGER NOT NULL,
        price NUMERIC(10, 2) NOT NULL
    );

INSERT INTO
    Bikes (
        modelName,
        manufacturerName,
        engineDisplacement,
        transmission,
        gearbox,
        tankCapacity,
        price
    )
VALUES
    (
        'SP Shine',
        'Honda',
        125,
        'manual',
        5,
        11,
        96799.00
    );

SELECT
    *
FROM
    Bikes;



DELETE FROM Bikes;


ALTER TABLE Bikes
ADD COLUMN power NUMERIC(4,2) NOT NULL,
ADD COLUMN torque NUMERIC(4,2) NOT NULL;

ALTER TABLE Bikes OWNER TO sagnik;


UPDATE Bikes 
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



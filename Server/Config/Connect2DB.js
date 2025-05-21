import dotenv from 'dotenv';
import pg from 'pg'


dotenv.config();

const db = new pg.Client({

    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

const connect = async () => {


    try {

        console.log(`Attempting Connecting To DB---`)
        await db.connect();
        console.log(`###########---Connected To DB---###########`)

    } catch (error) {

        console.log(error);
        throw new Error(error.message);

    }


}

export default connect;
export { db };




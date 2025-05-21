import express from 'express'
import dotenv from 'dotenv'
import connect from './Config/Connect2DB.js';
import cors from 'cors';
import morgan from 'morgan';
import bikeRouter from './Routes/Bikes.Route.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


connect();


app.use('/api', bikeRouter);

app.listen(process.env.PORT, () => {

    console.log(`Server Running On ${process.env.PORT}`)
})
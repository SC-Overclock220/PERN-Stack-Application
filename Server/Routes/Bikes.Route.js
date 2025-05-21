import express from 'express';
import getBikes from '../Controllers/GetBikes.Controller.js';
import createBikes from '../Controllers/CreateBikes.Controller.js';
import deleteBikes from '../Controllers/DeleteBikes.Controller.js';
const router = express.Router();


router.get("/getbikes", getBikes);
router.post('/createBikes', createBikes);
router.delete('/deleteBikes/:id', deleteBikes);


export default router;
import express from 'express';
import getBikes from '../Controllers/GetBikes.Controller.js';
import createBikes from '../Controllers/CreateBikes.Controller.js';
import deleteBikes from '../Controllers/DeleteBikes.Controller.js';
import updateBikes from '../Controllers/UpdateBikes.Controller.js';
import getParticularBike from '../Controllers/GetParticularBike.Controller.js';
import searchBike from '../Controllers/SearchBikes.Controller.js';
const router = express.Router();


router.get("/getBikes", getBikes);
router.get("/getBike/:id", getParticularBike)
router.post('/createBikes', createBikes);
router.delete('/deleteBikes/:id', deleteBikes);
router.put('/updateBikes/:id', updateBikes);
router.post('/searchBike', searchBike);


export default router;
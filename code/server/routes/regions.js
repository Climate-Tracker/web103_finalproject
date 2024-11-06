import express from 'express';
import RegionController from '../controllers/regions.js';

const regionRouter = express.Router();

regionRouter.get('/', RegionController.getRegions);
regionRouter.post('/', RegionController.postRegion);
regionRouter.delete('/:id', RegionController.deleteRegion);

export default regionRouter;
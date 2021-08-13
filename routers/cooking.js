import express from 'express';

import cooking from '../controllers/cooking.js';

const router = express.Router();

router.get('/', cooking.index);

router.post('/', cooking.createCooking);

router.put('/', cooking.updateCooking)

export default router;
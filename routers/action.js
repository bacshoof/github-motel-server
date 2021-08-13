import express from 'express';

import action from '../controllers/action.js';

const router = express.Router();

router.get('/', action.index);

router.post('/', action.createAction);

export default router;
import express from 'express';
import member from '../controllers/member.js';

const router = express.Router();

router.get('/', member.index);

router.post('/', member.createMember);

router.get('/:id', member.findone)

router.put('/:id', member.updateMember)

router.post('/login', member.login)

export default router;

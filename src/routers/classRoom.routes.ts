import { Router } from 'express';
import { createClassRoom, updateClassRoom, getClassRooms, getClassRoom, deleteClassRoom } from '../controllers/classRoom.controller'
const router = Router();

router.get('/classroom', getClassRooms);
router.post('/classroom/create', createClassRoom);
router.get('/classroom/:id', getClassRoom);
router.put('/classroom/update/:id', updateClassRoom);
router.delete('/classroom/:id', deleteClassRoom);
export default router;
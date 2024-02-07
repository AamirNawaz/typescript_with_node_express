import express from 'express';
const router = express.Router();
import { UserController } from '../controllers/UserController';
import IocContainer from '../containers/IOcContainer';

const userController = IocContainer.resolve<UserController>('userController');
router.get('/get/:id', userController.getUser.bind(userController));

export = router;

import express from 'express';
const router = express.Router();
import { UserController } from '../controllers/UserController';
import IocContainer from '../containers/IocContainer';

const userController = IocContainer.resolve<UserController>('userController');
router.get('/', userController.getUsers.bind(userController));
router.get('/:id', userController.getUser.bind(userController));
router.post('/create', userController.createUser.bind(userController));

export = router;

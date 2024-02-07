import { Request, Response, response } from 'express';
import { UserService } from '../services/user/UserService';
export class UserController {
    constructor(private userService: UserService) {}

    createUser(req: Request, res: Response): void {
        const user = req.body;
        const createdUser = this.userService.createUser(user);
        res.json(createdUser);
    }

    getUser(req: Request, res: Response): void {
        const userId = parseInt(req.params.id);
        const user = this.userService.getUserById(userId);
        if (!user) {
            res.status(404).json({
                message: 'User not found!'
            });
            return;
        }
        res.status(200).json({
            user
        });
    }
    getUsers(req: Request, res: Response): void {
        const users = this.userService.getUsers();
        res.status(200).json(users);
    }
}

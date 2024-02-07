import { User } from '../../models/userModel';

export interface UserService {
    createUser(user: User): User;
    getUserById(id: Number): User | undefined;
    getUsers(): User[];
}

import { User } from '../../models/userModel';
import { UserService } from './UserService';

export class UserServiceImpl implements UserService {
    private users: User[] = [];

    createUser(user: User): User {
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }
    getUserById(id: Number): User | undefined {
        return this.users.find((user) => user.id === id);
    }

    getUsers(): User[] {
        return this.users;
    }
}

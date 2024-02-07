import { UserController } from '../controllers/UserController';
import { UserService } from '../services/user/UserService';
import { UserServiceImpl } from '../services/user/UserServiceImp';

// Inversion of Control (IoC)
class Container {
    private instances: { [key: string]: any } = {};
    register(key: string, instance: any): void {
        this.instances[key] = instance;
    }

    resolve<T>(key: string): T {
        return this.instances[key];
    }
}

const container = new Container();
container.register('userService', new UserServiceImpl());
container.register('userController', new UserController(container.resolve<UserService>('userService')));
export default container;

/**
 * What is Ioc Contianer ?
 * Answer:
 * IoC containers are a design pattern used in software development
    to manage the creation and resolution of dependencies within an application.

    In the context of Node.js or TypeScript applications, 
    an IoC container helps manage dependencies between various components of the application, such as services, controllers, repositories, etc. It allows you to centralize the registration and resolution of dependencies, making your code more modular, maintainable, and testable.
 */

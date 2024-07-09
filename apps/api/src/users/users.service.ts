import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from 'src/types/users/users-interface';

export
@Injectable()
class Database {
  getUsers(): Promise<Array<Users>> {
    return Promise.resolve([
      {
        id: '1',
        name: 'John',
        surname: 'Doe',
        email: 'a@a.com',
        username: 'johndoe',
        password: '1234',
        avatar: 'https://i.pravatar.cc/400',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
        posts: [],
      },
    ]);
  }

  getUserById(id: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname: 'Doe',
      email: 'a@a.com',
      username: 'johndoe',
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  getUserByEmail(email: string): Promise<Users> {
    return Promise.resolve({
      id: '1',
      name: 'John',
      surname: 'Doe',
      email,
      username: 'johndoe',
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  getUserByUsername(username: string): Promise<Users> {
    return Promise.resolve({
      id: '1',
      name: 'John',
      surname: 'Doe',
      email: 'a@a.com',
      username,
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  createUser(createUserDto: CreateUserDto): Promise<Users> {
    return Promise.resolve({
      id: '1',
      name: createUserDto.name,
      surname: createUserDto.surname,
      email: createUserDto.email,
      username: createUserDto.username,
      password: createUserDto.password,
      avatar: createUserDto.avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    return Promise.resolve({
      id,
      name: updateUserDto.name,
      surname: updateUserDto.surname,
      email: updateUserDto.email,
      username: updateUserDto.username,
      password: updateUserDto.password,
      avatar: updateUserDto.avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  deleteUser(id: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname: 'Doe',
      email: 'a@a.com',
      username: 'johndoe',
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUserPassword(id: string, password: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname: 'Doe',
      email: 'a@a.com',
      username: 'johndoe',
      password,
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUserAvatar(id: string, avatar: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname: 'Doe',
      email: 'a@a.com',
      username: 'johndoe',
      password: '1234',
      avatar,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUserEmail(id: string, email: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname: 'Doe',
      email,
      username: 'johndoe',
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUserUsername(id: string, username: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname: 'Doe',
      email: 'a@a.com',
      username,
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUserName(id: string, name: string): Promise<Users> {
    return Promise.resolve({
      id,
      name,
      surname: 'Doe',
      email: 'a@a.com',
      username: 'johndoe',
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }

  updateUserSurname(id: string, surname: string): Promise<Users> {
    return Promise.resolve({
      id,
      name: 'John',
      surname,
      email: 'a@a.com',
      username: 'johndoe',
      password: '1234',
      avatar: 'https://i.pravatar.cc/400',
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: new Date(),
      posts: [],
    });
  }
}

export @Injectable()
class Logger {
  log(message: string): void {
    console.log(message);
  }
}

@Injectable()
export class UsersService {
  constructor(
    private database: Database,
    private logger: Logger,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    this.logger.log(`createUserDto: ${JSON.stringify(createUserDto)}`);
    return this.database.createUser(createUserDto);
  }

  async findAll(): Promise<Array<Users>> {
    this.logger.log(`findAll: ${JSON.stringify(this.database.getUsers())}`);
    return this.database.getUsers();
  }

  async findOne(id: string): Promise<Users> {
    this.logger.log(
      `findOne: ${JSON.stringify(this.database.getUserById(id))}`,
    );
    return this.database.getUserById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<Users> {
    this.logger.log(`updateUserDto: ${JSON.stringify(updateUserDto)}`);
    return this.database.updateUser(id.toString(), updateUserDto);
  }

  async remove(id: string): Promise<Users> {
    this.logger.log(`remove: ${JSON.stringify(this.database.deleteUser(id))}`);
    return this.database.deleteUser(id.toString());
  }
}

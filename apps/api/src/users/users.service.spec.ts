import { Test, TestingModule } from '@nestjs/testing';
import { Database, UsersService, Logger } from './users.service';
import { TestBed } from '@automock/jest';
import { Users } from '../types/users/users-interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersController } from './users.controller';

describe('UsersService test', () => {
  let userService: UsersService;
  let database: jest.Mocked<Database>;
  let logger: jest.Mocked<Logger>;

  beforeAll(async () => {
    const { unit, unitRef } = TestBed.create(UsersService).compile();

    userService = unit;
    database = unitRef.get<Database>(Database);
    logger = unitRef.get<Logger>(Logger);
  });

  it('Should retreive users from the database', async () => {
    const mockUsers: Users[] = [
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
      {
        id: '2',
        name: 'Fuancho',
        surname: 'Guerrero',
        email: 'aaaa@sss.com',
        username: 'estarosa',
        password: '1234',
        avatar: 'https://i.pravatar.cc/430',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
        posts: [],
      },
    ];

    database.getUsers.mockResolvedValue(mockUsers);

    const users = await userService.findAll();

    expect(logger.log).toHaveBeenCalled();
    expect(database.getUsers).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  });

  // // Successfully creates a user with valid data
  // it('should create a user when valid data is provided', async () => {
  //   const usersService = {
  //     create: jest.fn().mockResolvedValue('user created'),
  //   };
  //   const usersController = new UsersController(
  //     usersService as any,
  //     logger as any,
  //   );
  //   const createUserDto = new CreateUserDto(
  //     'John',
  //     'Doe',
  //     'john.doe@example.com',
  //     'johndoe',
  //     'password123',
  //     'avatar.png',
  //   );

  //   const result = await usersController.create(createUserDto);

  //   expect(usersService.create).toHaveBeenCalledWith(createUserDto);
  //   expect(result).toBe('user created');
  // });

  // let service: UsersService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [UsersService],
  //   }).compile();

  //   service = module.get<UsersService>(UsersService);
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });
});

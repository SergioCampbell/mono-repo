import { Module } from '@nestjs/common';
import { UsersService, Database } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService, Database],
})
export class UsersModule {}

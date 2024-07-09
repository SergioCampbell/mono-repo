import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  id: string;

  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    username: string,
    password: string,
    avatar: string,
    posts?: string[],
  ) {
    super(name, surname, email, username, password, avatar, posts);
    this.id = id;
  }
}

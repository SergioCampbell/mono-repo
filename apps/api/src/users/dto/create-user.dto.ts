import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  surname: string;
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;
  username: string;
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 20, { message: 'Password must be between 8 and 20 characters' })
  password: string;
  avatar: string;
  posts: string[];

  constructor(
    name: string,
    surname: string,
    email: string,
    username: string,
    password: string,
    avatar: string,
    posts?: string[],
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.posts = posts;
  }

  toEntity() {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      username: this.username,
      password: this.password,
      avatar: this.avatar,
      posts: this.posts,
    };
  }

  static fromEntity(entity: User) {
    return new CreateUserDto(
      entity.name,
      entity.surname,
      entity.email,
      entity.username,
      entity.password,
      entity.avatar,
      entity.posts,
    );
  }

  static fromJson(json: User) {
    return new CreateUserDto(
      json.name,
      json.surname,
      json.email,
      json.username,
      json.password,
      json.avatar,
      json.posts,
    );
  }

  static fromRequest(request: User) {
    return new CreateUserDto(
      request.name,
      request.surname,
      request.email,
      request.username,
      request.password,
      request.avatar,
      request.posts,
    );
  }
}

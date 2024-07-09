export class User {
  id: string;
  name: string;
  surname: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  posts: string[];

  constructor(user: Partial<User>) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.email = user.email;
    this.username = user.username;
    this.password = user.password;
    this.avatar = user.avatar;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.deletedAt = user.deletedAt;
    this.posts = user.posts;
  }

  toEntity() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      username: this.username,
      password: this.password,
      avatar: this.avatar,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt,
      posts: this.posts,
    };
  }

  static fromEntity(user: User) {
    return new User(user);
  }

  static fromEntities(users: User[]) {
    return users.map((user) => new User(user));
  }

  static fromEntitiesWithCount(users: User[], count: number) {
    return {
      count,
      data: User.fromEntities(users),
    };
  }

  static fromEntityWithCount(user: User, count: number) {
    return {
      count,
      data: User.fromEntity(user),
    };
  }

  static fromEntitiesWithPagination(
    users: User[],
    page: number,
    limit: number,
  ) {
    return {
      page,
      limit,
      data: User.fromEntities(users),
    };
  }
}

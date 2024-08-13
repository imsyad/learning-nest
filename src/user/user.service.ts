import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private readonly user: User[] = [
    { id: 1, username: 'irsyad', password: 'StrongPassword123' },
    { id: 2, username: 'icad', password: 'StrongPassword123' },
    { id: 3, username: 'shyman', password: 'StrongPassword123' },
  ];

  create(user: User): void {
    this.user.push(user);
  }

  findAll(): User[] {
    return this.user;
  }

  findOneById(userId: number): User {
    return this.user.find((u) => u.id === userId);
  }

  updateUser(updatedUser: User): boolean {
    const selectedUser = this.user.findIndex((u) => u.id === updatedUser.id);
    if (selectedUser) {
      this.user[selectedUser] = updatedUser;
      return true;
    } else return false;
  }

  deleteUser(userId: number): string {
    const index = this.user.findIndex((u) => u.id === userId);
    if (index >= 0) {
      this.user.splice(index, 1);
      return `Successfully delete user with id: ${userId}`;
    } else return 'Failed to delete user';
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAllUsers(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string): string {
    const userId = Number(id);
    const user = this.userService.findOneById(userId);
    return user
      ? 'Returning user with id: ' +
          user.id +
          ', with username: ' +
          user.username
      : 'User is not found!';
  }

  @Post('register')
  registerUser(@Body() request: User): string {
    this.userService.create(request);
    return `Registering user with username: ${request.username}`;
  }

  @Put('update')
  updateUser(@Body() request: User): string {
    return this.userService.updateUser(request)
      ? `Successfully update user with id: ${request.id}`
      : 'Failed to update the user';
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id: number): string {
    const userId = Number(id);
    return this.userService.deleteUser(userId);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  findAllUsers(): string {
    return 'Returning all users';
  }

  @Get(':id')
  findOneUser(@Param('id') id: string): string {
    return 'Returning user with id: ' + id;
  }

  @Post('register')
  registerUser(@Body() request: any): string {
    return `Registering user with username: ${request.username}`;
  }

  @Put('update')
  updateUser(@Body() request: any): string {
    return `Update user with id: ${request.id}`;
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id: string): string {
    return 'Delete user with id: ' + id;
  }
}

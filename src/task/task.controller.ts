import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Get()
  findAllTasks(): string {
    return 'Returning all tasks';
  }

  @Get(':id')
  findTaskById(@Param('id') id: string): string {
    return 'Returning task with id: ' + id;
  }

  @Post('create')
  createTask(@Body() request: any): string {
    return 'Create task with data: ' + request.id;
  }

  @Put('update')
  updateTask(@Body() request: any): string {
    return 'Update task with id: ' + request.id;
  }

  @Delete('delete/:id')
  deleteTask(@Param('id') id: string): string {
    return 'Delete task with id: ' + id;
  }
}

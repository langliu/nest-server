import { Controller, Get, Param, Query, Post, Body, Request, Response, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserSearchDto } from './dto/userSearch.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getAll(@Query() query: UserSearchDto, @Response() res): Promise<void> {
    const userData = await this.userService.findAll(query);
    res.status(HttpStatus.OK).send(userData);
  }

  @Get(':id')
  async getOne(@Param('id') id: number, @Response() res: any): Promise<void> {
    const userData = await this.userService.findOne(id);
    res.status(HttpStatus.FOUND).send(userData);
  }

  @Post()
  async create(@Body() user: User, @Request() req: any, @Response() res: any): Promise<void> {
    const userData = await this.userService.create(user);
    res.status(HttpStatus.CREATED).send(userData);
  }

}

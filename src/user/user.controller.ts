import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

import { UserCreateRequest, UserRes } from '../dtos/user';
import { validateRequest } from '../utils/validation';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  //@UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<UserRes[]> {
    const users = await this.userService.findAll();
    return users.map(u => ({
      id: u.id,
      email: u.email,
      password: u.password,
      emailConfirmed: u.emailConfirmed,
      role: u.role,
    }));
  }

  @Get(':id')
  async findById(@Param() params: any): Promise<UserRes> {
    const getUser = await this.userService.findOneById(params.id);
    if (getUser) {
      return {
        id: getUser.id,
        email: getUser.email,
        password: getUser.password,
        emailConfirmed: getUser.emailConfirmed,
        role: getUser.role,
      };
    }
  }

  @Post()
  async create(@Body() createUser) {
    const validRes = validateRequest(createUser, UserCreateRequest);
    if (validRes.isValid) {
      await this.userService.create(createUser);
    } else {
      return validRes.errors;
    }
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateCatDto) {
    const validRes = validateRequest(updateCatDto, UserCreateRequest);
    if (validRes.isValid) {
      await this.userService.update(id, updateCatDto);
    } else {
      return validRes.errors;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    await this.userService.destroy(id);
  }
}

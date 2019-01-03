import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

import { Credentials } from '../dtos/credentials';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(userObj: User) {
    return await this.userRepository.save(userObj);
  }

  async login(credentials: Credentials) {
    const user = await this.userRepository.findOne({
      email: credentials.email,
      password: credentials.password,
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}

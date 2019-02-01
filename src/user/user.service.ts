import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Credentials } from '../dtos/credentials';
import * as uuid from 'uuid';

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

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({ email: `${email}` });
  }

  async findOneById(id: any) {
    return await this.userRepository.findOne({ id: id });
  }

  async login(credentials: Credentials) {
    const user = await this.userRepository.findOne({
      email: credentials.email,
      password: '$2a$10$teM2ASKy0QvVwTsa9DV1ruKPbyunujg7OBlhME9jbSLHsA.vb7Exm',
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}

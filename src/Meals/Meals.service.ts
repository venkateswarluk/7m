import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MealType } from './Meals.entity';
import { MealTypeCreateRequest, MealtypeReq } from '../dtos/mealtype';
import { validateRequest } from '../utils/validation';

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(MealType)
    private readonly mealTypeRepository: Repository<MealType>,
  ) {}

  async findAll(): Promise<MealType[]> {
    return await this.mealTypeRepository.find();
  }

  async create(mealObj: MealtypeReq) {
    return await this.mealTypeRepository.save(mealObj);
  }
}

import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MealsService } from './Meals.service';
import { MealType } from './Meals.entity';
import { MealTypeCreateRequest, MealtypeReq } from '../dtos/mealtype';
import { validateRequest } from '../utils/validation';
import { AuthGuard } from '@nestjs/passport';

@Controller('meals')
export class MealTypeController {
  constructor(private readonly mealService: MealsService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(): Promise<MealType[]> {
    return this.mealService.findAll();
  }

  @Post('/mealType')
  async create(@Body() createMealType: MealtypeReq) {
    const validRes = validateRequest(createMealType, MealTypeCreateRequest);
    if (validRes.isValid) {
      await this.mealService.create(createMealType);
    } else {
      return validRes.errors;
    }
  }
}

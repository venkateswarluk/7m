import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityCategory } from '../ActivityCategory/activitycategory.entity';

@Injectable()
export class ActivityCategoryService {
  constructor(
    @InjectRepository(ActivityCategory)
    private readonly categoryRepository: Repository<ActivityCategory>,
  ) {}

  async createCategory(ActivityObj: ActivityCategory) {
    console.log(ActivityObj);
    return await this.categoryRepository.save(ActivityObj);
  }
}

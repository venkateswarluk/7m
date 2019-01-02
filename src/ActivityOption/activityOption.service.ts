import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityOption } from '../ActivityOption/activityoption.entity';

@Injectable()
export class ActivityOptionService {
  constructor(
    @InjectRepository(ActivityOption)
    private readonly activityRepository: Repository<ActivityOption>,
  ) {}

  async createActivityOption(ActivityObj: ActivityOption) {
    console.log(ActivityObj);
    return await this.activityRepository.save(ActivityObj);
  }
}

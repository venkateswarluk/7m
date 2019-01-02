import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityDetail } from '../ActivityDetail/activitydetail.entity';

@Injectable()
export class ActivityDetailService {
  constructor(
    @InjectRepository(ActivityDetail)
    private readonly activityRepository: Repository<ActivityDetail>,
  ) {}

  async createActivityDetail(ActivityObj: ActivityDetail) {
    console.log(ActivityObj);
    return await this.activityRepository.save(ActivityObj);
  }
}

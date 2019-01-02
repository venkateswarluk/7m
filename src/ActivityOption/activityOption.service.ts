import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityOption } from '../ActivityOption/activityoption.entity';

@Injectable()
export class ActivityOptionService {
  constructor(
    @InjectRepository(ActivityOption)
    private readonly optionRepository: Repository<ActivityOption>,
  ) {}

  async createActivityOption(ActivityObj: ActivityOption) {
    console.log(ActivityObj);
    const getMaxIds = await this.optionRepository.query(
      `select Max(activityOptionId) as optionId,Max(activityId) as activityId from sevenm.activityoptions`,
    );
    const [act] = getMaxIds;
    const activityOption = {
      ...ActivityObj,
      activityOptionId: act.optionid ? act.optionId + 1 : 1,
      activityId: act.activityid ? act.activityid + 1 : 1,
    };

    return await this.optionRepository.save(activityOption);
  }
}

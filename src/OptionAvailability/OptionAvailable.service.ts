import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionAvailability } from '../OptionAvailability/optionavailability.entity';

@Injectable()
export class OptionAvailabilityService {
  constructor(
    @InjectRepository(OptionAvailability)
    private readonly activityRepository: Repository<OptionAvailability>,
  ) {}

  async createOptionAvailability(ActivityObj: OptionAvailability) {
    console.log(ActivityObj);
    return await this.activityRepository.save(ActivityObj);
  }
}

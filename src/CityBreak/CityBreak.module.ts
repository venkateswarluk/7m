import { Module } from '@nestjs/common';
import { CityBreakService } from './CityBreak.service';
import { CityBreakDetailsService } from './CityBreakDetails.service';
import { CityBreakInclusionService } from './CityBreakInclusion.service';
import { CityBreakExclusionService } from './CityBreakExclusion.service';
import { CityBreakController } from './CityBreak.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityBreak } from './CityBreak.entity';
import { CityBreakDetail } from './CityBreakDetails.entity';
import { CityBreakInclusion } from './CityBreakInclusion.entity';
import { CityBreakExclusion } from './CityBreakExclusion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CityBreak,
      CityBreakDetail,
      CityBreakInclusion,
      CityBreakExclusion,
    ]),
  ],
  providers: [
    CityBreakService,
    CityBreakDetailsService,
    CityBreakInclusionService,
    CityBreakExclusionService,
  ],
  controllers: [CityBreakController],
})
export class CityBreakModule {}

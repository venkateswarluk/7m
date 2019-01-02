import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ActivitiesModule } from './Activity/Activity.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ActivitiesModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

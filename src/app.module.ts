import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ActivitiesModule } from './Activity/Activity.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ActivitiesModule, AuthModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}

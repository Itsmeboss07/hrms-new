import { Module } from '@nestjs/common';
import { AttendaceService } from './attendace.service';
import { AttendaceController } from './attendace.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './entities/attendace.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance])],
  controllers: [AttendaceController],
  providers: [AttendaceService]
})
export class AttendaceModule { }

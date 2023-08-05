import { Injectable } from '@nestjs/common';
import { CreateAttendaceDto } from './dto/create-attendace.dto';
import { UpdateAttendaceDto } from './dto/update-attendace.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './entities/attendace.entity';
import { Repository } from 'typeorm'
import * as moment from 'moment';

@Injectable()
export class AttendaceService {
  constructor(@InjectRepository(Attendance) private readonly attendanceRepository: Repository<Attendance>) {

  }

  async create(createAttendaceDto: CreateAttendaceDto, loggedUser: any) {
    try {
      let date = moment().format('YYYY-MM-DD');
      let attendanceAlreadyMarked = await this.attendanceRepository.findOne({ where: { timestamp: date, userId: loggedUser.id } });
      if (attendanceAlreadyMarked) {
        return { status: 400, data: "Attendance already marked" }
      }
      createAttendaceDto.userId = loggedUser.id
      createAttendaceDto.timestamp = date

      await this.attendanceRepository.save(createAttendaceDto)

      return { status: 200, data: "Attendance marked" };
    } catch (err) {
      console.log("Error in attendance create", err)
    }
  }

  async findAll(loggedUser: any) {
    try {

      let attendanceHistory = await this.attendanceRepository.find({ where: { userId: loggedUser.id } });
      if (!attendanceHistory) {
        return { status: 200, data: "No history found" }
      }
      return attendanceHistory;

    } catch (err) {
      console.log("Error in attendance create", err)
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} attendace`;
  // }

  async update(id: number, updateAttendaceDto: UpdateAttendaceDto, loggedUser:any) {
    try {
      if (!id) id = loggedUser.id;

      let attendanceHistory = await this.attendanceRepository.findOne({ where: { userId: id } });
      if (!attendanceHistory) {
        return { status: 200, data: "No Data found" }
      }

      if(attendanceHistory.status == updateAttendaceDto.status ) return { status: 200, data: "Same data as you entered" }

      this.attendanceRepository.merge(attendanceHistory, updateAttendaceDto);

      await this.attendanceRepository.save(attendanceHistory)

      return { status: 200, data: "Attendance marked" };

    } catch (err) {
      console.log("Error in attendance update", err)
    }
   
  }

  // remove(id: number) {
  //   return `This action removes a #${id} attendace`;
  // }
}

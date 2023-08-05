import { Injectable } from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave } from './entities/leave.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeaveService {

  constructor(@InjectRepository(Leave) private readonly leaveRepository: Repository<Leave>) { }

  async create(createLeaveDto: CreateLeaveDto, loggedUser: any) {
    try {
      createLeaveDto.createdBy = loggedUser.id;
      createLeaveDto.userId = loggedUser.id;
      await this.leaveRepository.save(createLeaveDto);

      return { status: 200, data: "Leave submitted" };

    } catch (err) {
      console.log("error in creating leave", err);
    }
  }

  async findAll(loggedUser:any) {
    return await this.leaveRepository.find({where:{userId:loggedUser.id}});
  }

  findOne(id: number) {
    return `This action returns a #${id} leave`;
  }

  update(id: number, updateLeaveDto: UpdateLeaveDto) {
    return `This action updates a #${id} leave`;
  }

  remove(id: number) {
    return `This action removes a #${id} leave`;
  }
}

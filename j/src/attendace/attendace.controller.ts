import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,Request } from '@nestjs/common';
import { AttendaceService } from './attendace.service';
import { CreateAttendaceDto } from './dto/create-attendace.dto';
import { UpdateAttendaceDto } from './dto/update-attendace.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('attendace')
export class AttendaceController {
  constructor(private readonly attendaceService: AttendaceService) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post()
  create(@Body() createAttendaceDto: CreateAttendaceDto,@Request() req:any) {
    console.log(createAttendaceDto)
    return this.attendaceService.create(createAttendaceDto,req.user);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get(':id')
  findAll(@Request() req:any) {
    return this.attendaceService.findAll(req.user);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.attendaceService.findOne(+id);
  // }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttendaceDto: UpdateAttendaceDto,@Request() req:any) {
    return this.attendaceService.update(+id, updateAttendaceDto, req.user);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.attendaceService.remove(+id);
  // }
}

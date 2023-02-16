import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RemarksService } from './remarks.service';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';

@Controller('remarks')
export class RemarksController {
  constructor(private readonly remarksService: RemarksService) {}

  @Post()
  create(@Body() createRemarkDto: CreateRemarkDto) {
    return this.remarksService.create(createRemarkDto);
  }

  @Get('/collection/:collectionId')
  findAll(@Param('collectionId') collectionId: string) {
    return this.remarksService.findAll(collectionId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remarksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemarkDto: UpdateRemarkDto) {
    return this.remarksService.update(+id, updateRemarkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remarksService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';

@Injectable()
export class RemarksService {
  create(createRemarkDto: CreateRemarkDto) {
    return 'This action adds a new remark';
  }

  findAll() {
    return `This action returns all remarks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} remark`;
  }

  update(id: number, updateRemarkDto: UpdateRemarkDto) {
    return `This action updates a #${id} remark`;
  }

  remove(id: number) {
    return `This action removes a #${id} remark`;
  }
}

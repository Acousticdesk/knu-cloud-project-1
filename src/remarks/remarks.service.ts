import { Injectable } from '@nestjs/common';
import { CreateRemarkDto } from './dto/create-remark.dto';
import { UpdateRemarkDto } from './dto/update-remark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Remark } from './entities/remark.db-entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemarksService {
  constructor(
    @InjectRepository(Remark)
    private readonly remarksRepository: Repository<Remark>,
  ) {}

  create(createRemarkDto: CreateRemarkDto) {
    return this.remarksRepository.insert(createRemarkDto);
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

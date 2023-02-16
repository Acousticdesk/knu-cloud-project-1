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

  findAll(collectionId: string) {
    return this.remarksRepository.findBy({ collection: collectionId });
  }

  findOne(id: number) {
    return this.remarksRepository.findOneBy({ id });
  }

  update(id: number, updateRemarkDto: UpdateRemarkDto) {
    return this.remarksRepository.update({ id }, updateRemarkDto);
  }

  remove(id: number) {
    return this.remarksRepository.delete({ id });
  }
}

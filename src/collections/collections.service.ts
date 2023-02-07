import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.db-entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionsRepository: Repository<Collection>,
  ) {}

  create(createCollectionDto: CreateCollectionDto) {
    return this.collectionsRepository.insert(createCollectionDto);
  }

  findAll() {
    return this.collectionsRepository.find();
  }

  findOne(id: number) {
    return this.collectionsRepository.findOneBy({ id });
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return this.collectionsRepository.update({ id }, updateCollectionDto);
  }

  remove(id: number) {
    return this.collectionsRepository.delete({ id });
  }
}

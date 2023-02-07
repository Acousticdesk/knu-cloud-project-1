import { Module } from '@nestjs/common';
import { RemarksService } from './remarks.service';
import { RemarksController } from './remarks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Remark } from './entities/remark.db-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Remark])],
  controllers: [RemarksController],
  providers: [RemarksService],
})
export class RemarksModule {}

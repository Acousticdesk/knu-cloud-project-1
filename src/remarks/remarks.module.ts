import { Module } from '@nestjs/common';
import { RemarksService } from './remarks.service';
import { RemarksController } from './remarks.controller';

@Module({
  controllers: [RemarksController],
  providers: [RemarksService]
})
export class RemarksModule {}

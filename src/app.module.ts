import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './collections/collections.module';
import { RemarksModule } from './remarks/remarks.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CollectionsModule, RemarksModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

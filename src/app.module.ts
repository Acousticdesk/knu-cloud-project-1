import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './collections/collections.module';
import { RemarksModule } from './remarks/remarks.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.db-entity';

@Module({
  imports: [
    CollectionsModule,
    RemarksModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

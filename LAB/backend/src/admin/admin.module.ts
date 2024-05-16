import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsController } from './admin.controller';
import { AdminsService } from './admin.service';
@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [AdminsController],
  providers: [AdminsService],
})
export class AdminModule {}

import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { EquipmentController } from './equipment.controller'
import { EquipmentEntity } from './equipment.entity'
import { EquipmentService } from './equipment.service'

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentEntity])],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule {}

import { PartialType } from '@nestjs/swagger'

import { EquipmentEntity } from '../equipment.entity'

export class CreateEquipmentDto extends PartialType(EquipmentEntity) {}

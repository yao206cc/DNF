import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { PagerDto } from '~/common/dto/pager.dto'
import { paginate } from '~/helper/paginate'

import { Pagination } from '~/helper/paginate/pagination'

import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { UpdateEquipmentDto } from './dto/update-equipment.dto'
import { EquipmentEntity } from './equipment.entity'

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(EquipmentEntity)
    private equipmentRepository: Repository<EquipmentEntity>,
  ) { }

  async create(createEquipmentDto: CreateEquipmentDto): Promise<void> {
    await this.equipmentRepository.insert(createEquipmentDto)
  }

  findAll({ page, pageSize }: PagerDto): Promise<Pagination<EquipmentEntity>> {
    return paginate<EquipmentEntity>(this.equipmentRepository.createQueryBuilder('equipment'), {
      page,
      pageSize,
    })
  }

  findOne(id: number) {
    return this.equipmentRepository.findOneBy({ id })
  }

  async update(equipmentId: number, updateEquipmentDto: UpdateEquipmentDto) {
    await this.equipmentRepository.update(
      equipmentId,
      updateEquipmentDto,
    )
  }

  remove(id: number) {
    return this.equipmentRepository.delete(id)
  }
}

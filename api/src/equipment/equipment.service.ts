import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { Equipment } from './entities/equipment.entity';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  async create(createEquipmentDto: CreateEquipmentDto) {
    const equipment = this.equipmentRepository.create(createEquipmentDto);
    return this.equipmentRepository.save(equipment);
  }

  findAll() {
    return this.equipmentRepository.find();
  }

  findOne(equipmentId: number) {
    return this.equipmentRepository.findOneBy({ equipmentId });
  }

  update(equipmentId: number, updateEquipmentDto: UpdateEquipmentDto) {
    const equipment = this.equipmentRepository.update(
      equipmentId,
      updateEquipmentDto,
    );
    return equipment;
  }

  remove(id: number) {
    return this.equipmentRepository.delete(id);
  }
}

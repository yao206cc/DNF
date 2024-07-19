import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'

import { ApiOperation, ApiTags } from '@nestjs/swagger'

import { ApiResult } from '~/common/decorators/api-result.decorator'

import { IdParam } from '~/common/decorators/id-param.decorator'
import { PagerDto } from '~/common/dto/pager.dto'

import { CreatorPipe } from '~/common/pipes/creator.pipe'

import { Perm, definePermission } from '../auth/decorators/permission.decorator'

import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { UpdateEquipmentDto } from './dto/update-equipment.dto'
import { EquipmentEntity } from './equipment.entity'
import { EquipmentService } from './equipment.service'

export const permissions = definePermission('equipment', {
  LIST: 'list',
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update',
  DELETE: 'delete',
} as const)

@ApiTags('Equipment - 装备')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) { }

  @Post()
  @ApiOperation({ summary: '新增装备' })
  @Perm(permissions.CREATE)
  async create(@Body(CreatorPipe) createEquipmentDto: CreateEquipmentDto): Promise<void> {
    await this.equipmentService.create(createEquipmentDto)
  }

  @Get()
  @ApiOperation({ summary: '获取装备列表' })
  @ApiResult({ type: [EquipmentEntity], isPage: true })
  @Perm(permissions.LIST)
  findAll(@Query() dto: PagerDto) {
    return this.equipmentService.findAll(dto)
  }

  @Get(':id')
  @ApiOperation({ summary: '获取装备详情' })
  @Perm(permissions.READ)
  findOne(@IdParam() id: number) {
    return this.equipmentService.findOne(+id)
  }

  @Put(':id')
  @ApiOperation({ summary: '更新装备' })
  async update(
    @IdParam() id: number,
    @Body(CreatorPipe) updateEquipmentDto: UpdateEquipmentDto,
  ) {
    await this.equipmentService.update(+id, updateEquipmentDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除装备' })
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id)
  }
}

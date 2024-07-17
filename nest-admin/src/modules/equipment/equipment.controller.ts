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

import { CreateEquipmentDto } from './dto/create-equipment.dto'
import { UpdateEquipmentDto } from './dto/update-equipment.dto'
import { EquipmentEntity } from './equipment.entity'
import { EquipmentService } from './equipment.service'

@ApiTags('Equipment - 装备')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  @ApiOperation({ summary: '新增装备' })
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto)
  }

  @Get()
  @ApiOperation({ summary: '获取装备列表' })
  @ApiResult({ type: [EquipmentEntity], isPage: true })
  findAll(@Query() dto: PagerDto) {
    return this.equipmentService.findAll(dto)
  }

  @Get(':id')
  @ApiOperation({ summary: '获取装备详情' })
  findOne(@IdParam() id: number) {
    return this.equipmentService.findOne(+id)
  }

  @Put(':id')
  @ApiOperation({ summary: '更新装备' })
  update(
    @IdParam() id: number,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return this.equipmentService.update(+id, updateEquipmentDto)
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除装备' })
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id)
  }
}

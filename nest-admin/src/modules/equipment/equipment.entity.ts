import { Column, Entity } from 'typeorm'

import { CommonEntity } from '~/common/entity/common.entity'

/**
 * 装备实体类，用于映射数据库中的装备表。
 */
@Entity('equipment')
export class EquipmentEntity extends CommonEntity {
  /**
   * 装备名称
   */
  @Column({ name: 'equipment_name', type: 'varchar', length: 255, nullable: true })
  equipmentName: string

  /**
   * 装备适用等级
   */
  @Column({ name: 'applicable_level', type: 'int', nullable: true })
  applicableLevel: number

  /**
   * 适用职业
   */
  @Column({ name: 'applicable_class', type: 'varchar', length: 255, nullable: true })
  applicableClass: string

  /**
   * 装备品质
   */
  @Column({ name: 'equipment_quality', type: 'varchar', length: 255, nullable: true })
  equipmentQuality: string

  /**
   * 穿戴部位
   */
  @Column({ name: 'wear_part', type: 'varchar', length: 255, nullable: true })
  wearPart: string

  /**
   * 装备类型
   */
  @Column({ name: 'quipment_type', type: 'varchar', length: 255, nullable: true })
  quipmentType: string

  /**
   * 攻击速度类型
   */
  @Column({ name: 'attack_speed_type', type: 'varchar', length: 255, nullable: true })
  attackSpeedType: string

  /**
   * 抗魔值
   */
  @Column({ name: 'magic_resistance', type: 'int', nullable: true })
  magicResistance: number

  /**
   * 生命值
   */
  @Column({ name: 'health_points', type: 'int', nullable: true })
  healthPoints: number

  /**
   * 魔法值
   */
  @Column({ name: 'mana_points', type: 'int', nullable: true })
  manaPoints: number

  /**
   * 力量
   */
  @Column({ type: 'int', nullable: true })
  strength: number

  /**
   * 智力
   */
  @Column({ type: 'int', nullable: true })
  intelligence: number

  /**
   * 体力
   */
  @Column({ type: 'int', nullable: true })
  vitality: number

  /**
   * 精神
   */
  @Column({ type: 'int', nullable: true })
  spirit: number

  /**
   * 物理攻击力
   */
  @Column({ name: 'physical_attack', type: 'int', nullable: true })
  physicalAttack: number

  /**
   * 魔法攻击力
   */
  @Column({ name: 'magical_attack', type: 'int', nullable: true })
  magicalAttack: number

  /**
   * 魔法防御力
   */
  @Column({ name: 'magical_defense', type: 'int', nullable: true })
  magicalDefense: number

  /**
   * 物理防御力
   */
  @Column({ name: 'physical_defense', type: 'int', nullable: true })
  physicalDefense: number

  /**
   * 物理暴击率
   */
  @Column({ name: 'physical_critical_rate', type: 'decimal', precision: 5, scale: 2, nullable: true })
  physicalCriticalRate: number

  /**
   * 物理暴击
   */
  @Column({ name: 'physical_critical', type: 'int', nullable: true })
  physicalCritical: number

  /**
   * 魔法暴击率
   */
  @Column({ name: 'magical_critical_rate', type: 'decimal', precision: 5, scale: 2, nullable: true })
  magicalCriticalRate: number

  /**
   * 魔法暴击
   */
  @Column({ name: 'magical_critical', type: 'int', nullable: true })
  magicalCritical: number

  /**
   * 攻击速度数值
   */
  @Column({ name: 'attack_speed', type: 'decimal', precision: 5, scale: 2, nullable: true })
  attackSpeed: number

  /**
   * 移动速度
   */
  @Column({ name: 'move_speed', type: 'decimal', precision: 5, scale: 2, nullable: true })
  moveSpeed: number

  /**
   * 施放速度
   */
  @Column({ name: 'cast_speed', type: 'decimal', precision: 5, scale: 2, nullable: true })
  castSpeed: number

  /**
   * 命中
   */
  @Column({ type: 'int', nullable: true })
  accuracy: number

  /**
   * 命中率
   */
  @Column({ name: 'accuracy_rate', type: 'decimal', precision: 5, scale: 2, nullable: true })
  accuracyRate: number

  /**
   * 装备图片URL
   */
  @Column({ name: 'image_url', type: 'varchar', length: 255, nullable: true })
  imageUrl: string

  /**
   * 特殊效果描述
   */
  @Column({ name: 'special_effect', type: 'text', nullable: true })
  specialEffect: string
}

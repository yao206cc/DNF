import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * 装备实体类，用于映射数据库中的装备表。
 */
@Entity('equipment')
export class Equipment {
  /**
   * 装备ID：主键，自增。
   */
  @PrimaryGeneratedColumn()
  equipmentId: number;

  /**
   * 装备名称。
   */
  @Column({ type: 'varchar', length: 255, nullable: false })
  equipmentName: string;

  /**
   * 装备适用等级。
   */
  @Column({ type: 'int', nullable: false })
  applicableLevel: number;

  /**
   * 适用职业。
   */
  @Column({ type: 'varchar', length: 255, nullable: false })
  applicableClass: string;

  /**
   * 装备品质。
   */
  @Column({ type: 'varchar', length: 255, nullable: false })
  equipmentQuality: string;

  /**
   * 穿戴部位。
   */
  @Column({ type: 'varchar', length: 255, nullable: false })
  wearPart: string;

  /**
   * 武器类型。
   */
  @Column({ type: 'varchar', length: 255, nullable: false })
  weaponType: string;

  /**
   * 攻击速度类型。
   */
  @Column({ type: 'varchar', length: 255, nullable: true })
  attackSpeedType: string;

  /**
   * 抗魔值。
   */
  @Column({ type: 'int', nullable: true })
  magicResistance: number;

  /**
   * 生命值。
   */
  @Column({ type: 'int', nullable: true })
  healthPoints: number;

  /**
   * 魔法值。
   */
  @Column({ type: 'int', nullable: true })
  manaPoints: number;

  /**
   * 力量。
   */
  @Column({ type: 'int', nullable: true })
  strength: number;

  /**
   * 智力。
   */
  @Column({ type: 'int', nullable: true })
  intelligence: number;

  /**
   * 体力。
   */
  @Column({ type: 'int', nullable: true })
  vitality: number;

  /**
   * 精神。
   */
  @Column({ type: 'int', nullable: true })
  spirit: number;

  /**
   * 物理攻击力。
   */
  @Column({ type: 'int', nullable: true })
  physicalAttack: number;

  /**
   * 魔法攻击力。
   */
  @Column({ type: 'int', nullable: true })
  magicalAttack: number;

  /**
   * 魔法防御力。
   */
  @Column({ type: 'int', nullable: true })
  magicalDefense: number;

  /**
   * 物理防御力。
   */
  @Column({ type: 'int', nullable: true })
  physicalDefense: number;

  /**
   * 物理暴击率。
   */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  physicalCriticalRate: number;

  /**
   * 物理暴击。
   */
  @Column({ type: 'int', nullable: true })
  physicalCritical: number;

  /**
   * 魔法暴击率。
   */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  magicalCriticalRate: number;

  /**
   * 魔法暴击。
   */
  @Column({ type: 'int', nullable: true })
  magicalCritical: number;

  /**
   * 攻击速度数值。
   */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  attackSpeed: number;

  /**
   * 移动速度。
   */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  moveSpeed: number;

  /**
   * 施放速度。
   */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  castSpeed: number;

  /**
   * 命中。
   */
  @Column({ type: 'int', nullable: true })
  accuracy: number;

  /**
   * 命中率。
   */
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  accuracyRate: number;

  /**
   * 装备图片URL。
   */
  @Column({ type: 'varchar', length: 255, nullable: true })
  imageUrl: string;

  /**
   * 特殊效果描述。
   */
  @Column({ type: 'text', nullable: true })
  specialEffect: string;
}

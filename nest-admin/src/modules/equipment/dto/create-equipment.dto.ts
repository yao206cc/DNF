// create-equipment.dto.ts
export class CreateEquipmentDto {
  equipmentName: string
  applicableLevel: number
  applicableClass: string
  equipmentQuality: string
  wearPart: string
  weaponType: string
  attackSpeedType?: string
  magicResistance?: number
  healthPoints?: number
  manaPoints?: number
  strength?: number
  intelligence?: number
  vitality?: number
  spirit?: number
  physicalAttack?: number
  magicalAttack?: number
  magicalDefense?: number
  physicalDefense?: number
  physicalCriticalRate?: number
  physicalCritical?: number
  magicalCriticalRate?: number
  magicalCritical?: number
  attackSpeed?: number
  moveSpeed?: number
  castSpeed?: number
  accuracy?: number
  accuracyRate?: number
  imageUrl?: string
  specialEffect?: string
}

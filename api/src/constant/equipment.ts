const equipmentFieldDescriptions = new Map([
  ['equipmentId', '装备ID'],
  ['equipmentName', '装备名称'],
  ['applicableLevel', '装备适用等级'],
  ['applicableClass', '适用职业'],
  ['equipmentQuality', '装备品质'],
  ['wearPart', '穿戴部位'],
  ['weaponType', '武器类型'],
  ['attackSpeedType', '攻击速度类型'],
  ['magicResistance', '抗魔值'],
  ['healthPoints', '生命值'],
  ['manaPoints', '魔法值'],
  ['strength', '力量'],
  ['intelligence', '智力'],
  ['vitality', '体力'],
  ['spirit', '精神'],
  ['physicalAttack', '物理攻击力'],
  ['magicalAttack', '魔法攻击力'],
  ['magicalDefense', '魔法防御力'],
  ['physicalDefense', '物理防御力'],
  ['physicalCriticalRate', '物理暴击率'],
  ['physicalCritical', '物理暴击'],
  ['magicalCriticalRate', '魔法暴击率'],
  ['magicalCritical', '魔法暴击'],
  ['attackSpeed', '攻击速度数值'],
  ['moveSpeed', '移动速度'],
  ['castSpeed', '施放速度'],
  ['accuracy', '命中率'],
  ['imageUrl', '装备图片'],
  ['specialEffect', '特殊效果描述'],
]);

// 使用这个 Map 来获取字段的汉字描述
function getFieldDescription(fieldName) {
  return equipmentFieldDescriptions.get(fieldName) || '';
}

export { equipmentFieldDescriptions, getFieldDescription };

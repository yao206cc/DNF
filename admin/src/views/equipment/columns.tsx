import { defineComponent, ref } from 'vue';
import { Image } from 'ant-design-vue';
import type { TableColumn } from '@/components/core/dynamic-table';

const ImageRender = defineComponent({
  props: { record: Object },
  setup(props) {
    const visible = ref(false);
    return () => (
      <>
        <Image
          src={props.record?.imageUrl}
          preview={{ visible: false }}
          onClick={() => (visible.value = true)}
        />
        <div hidden>
          <Image.PreviewGroup
            preview={{ visible: visible.value, onVisibleChange: (vis) => (visible.value = vis) }}
          >
            <Image src={props.record?.imageUrl} key={props.record?.imageUrl} />
          </Image.PreviewGroup>
        </div>
      </>
    );
  },
});

export const columns: TableColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '装备名称',
    dataIndex: 'equipmentName',
  },
  {
    title: '装备适用等级',
    dataIndex: 'applicableLevel',
  },
  {
    title: '适用职业',
    dataIndex: 'applicableClass',
  },
  {
    title: '装备品质',
    dataIndex: 'equipmentQuality',
  },
  {
    title: '穿戴部位',
    dataIndex: 'wearPart',
  },
  {
    title: '装备类型',
    dataIndex: 'equipmentType',
  },
  {
    title: '攻击速度类型',
    dataIndex: 'attackSpeedType',
  },
  {
    title: '抗魔值',
    dataIndex: 'magicResistance',
  },
  {
    title: '生命值',
    dataIndex: 'healthPoints',
  },
  {
    title: '魔法值',
    dataIndex: 'manaPoints',
  },
  {
    title: '力量',
    dataIndex: 'strength',
  },
  {
    title: '智力',
    dataIndex: 'intelligence',
  },
  {
    title: '体力',
    dataIndex: 'vitality',
  },
  {
    title: '精神',
    dataIndex: 'spirit',
  },
  {
    title: '物理攻击力',
    dataIndex: 'physicalAttack',
  },
  {
    title: '魔法攻击力',
    dataIndex: 'magicalAttack',
  },
  {
    title: '魔法防御力',
    dataIndex: 'magicalDefense',
  },
  {
    title: '物理防御力',
    dataIndex: 'physicalDefense',
  },
  {
    title: '物理暴击率',
    dataIndex: 'physicalCriticalRate',
  },
  {
    title: '物理暴击',
    dataIndex: 'physicalCritical',
  },
  {
    title: '魔法暴击率',
    dataIndex: 'magicalCriticalRate',
  },
  {
    title: '魔法暴击',
    dataIndex: 'magicalCritical',
  },
  {
    title: '攻击速度数值',
    dataIndex: 'attackSpeed',
  },
  {
    title: '移动速度',
    dataIndex: 'moveSpeed',
  },
  {
    title: '施放速度',
    dataIndex: 'castSpeed',
  },
  {
    title: '命中',
    dataIndex: 'accuracy',
  },
  {
    title: '命中率',
    dataIndex: 'accuracyRate',
  },
  {
    title: '装备图片URL',
    dataIndex: 'imageUrl',
    customRender: ({ record }) => <ImageRender record={record}></ImageRender>,
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
  },
  {
    title: '操作',
    width: 120,
    dataIndex: 'ACTION',
    actions: () => [
      {
        icon: 'ant-design:edit-outlined',
        tooltip: '编辑',
        auth: {
          perm: 'system:user:update',
          effect: 'disable',
        },
        onClick: () => alert('TODO'),
      },
    ],
  },
];

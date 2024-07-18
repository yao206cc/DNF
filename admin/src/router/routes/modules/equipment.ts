import type { RouteRecordRaw } from 'vue-router';
import { t } from '@/hooks/useI18n';

const moduleName = 'equipment';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/equipment',
    name: moduleName,
    redirect: { name: `${moduleName}-custom-modal` },
    meta: {
      title: t('routes.equipment.equipment'),
      icon: 'ant-design:skin-outlined',
    },
    children: [
      {
        path: 'list',
        name: `${moduleName}-list`,
        meta: {
          title: t('routes.equipment.list'),
          keepAlive: false,
        },
        component: () => import('@/views/equipment/index.vue'),
      },
      {
        path: ':id',
        name: `${moduleName}-info`,
        meta: {
          title: '装备详情',
          hideInMenu: true,
          keepAlive: false,
          activeMenu: `${moduleName}-list`,
        },
        component: () => import('@/views/equipment/info.vue'),
      },
    ],
  },
];

export default routes;

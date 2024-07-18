// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from '@/utils/request';

/** 获取装备列表 GET /api/equipment */
export async function equipmentFindAll(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.EquipmentFindAllParams,
  options?: RequestOptions,
) {
  return request<{
    items?: API.EquipmentEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>('/api/equipment', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增装备 POST /api/equipment */
export async function equipmentCreate(body: API.CreateEquipmentDto, options?: RequestOptions) {
  return request<API.EquipmentEntity>('/api/equipment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || { successMsg: '创建成功' }),
  });
}

/** 获取装备详情 GET /api/equipment/${param0} */
export async function equipmentFindOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.EquipmentFindOneParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<API.EquipmentEntity>(`/api/equipment/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新装备 PUT /api/equipment/${param0} */
export async function equipmentUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.EquipmentUpdateParams,
  body: API.UpdateEquipmentDto,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/equipment/${param0}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: '更新成功' }),
  });
}

/** 删除装备 DELETE /api/equipment/${param0} */
export async function equipmentRemove(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.EquipmentRemoveParams,
  options?: RequestOptions,
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/api/equipment/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || { successMsg: '删除成功' }),
  });
}

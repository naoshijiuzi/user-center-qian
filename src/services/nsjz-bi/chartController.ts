// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 此处后端没有提供注释 POST /chart/add */
export async function addChart(body: API.ChartAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/chart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/delete */
export async function deleteChart(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chart/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 文件上传-带多个参数 POST /chart/gen */
export async function uploadFile2(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadFile2Params,
  body: {},
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBiResponse>('/api/chart/gen', {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 文件上传-带对象参数 POST /chart/gentest */
export async function genChartByAi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartByAiParams,
  body: API.GenChartByAiRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString>('/chart/gentest', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /chart/get */
export async function getChartById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChart>('/chart/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /chart/list */
export async function listChart(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listChartParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListChart>('/chart/list', {
    method: 'GET',
    params: {
      ...params,
      chartQueryRequest: undefined,
      ...params['chartQueryRequest'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /chart/list/page */
export async function listChartByPage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listChartByPageParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/chart/list/page', {
    method: 'GET',
    params: {
      ...params,
      chartQueryRequest: undefined,
      ...params['chartQueryRequest'],
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/my/list/page */
export async function listMyChartByPage(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/chart/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/test */
export async function genChartByAitest(
  body: API.GenChartByAiRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString>('/chart/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 文件上传-不带参数 POST /chart/test2 */
export async function uploadFile(body: {}, options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/chart/test2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/update */
export async function updateChart(body: API.ChartUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

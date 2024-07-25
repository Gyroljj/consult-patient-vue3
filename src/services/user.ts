import type {
  CodeType,
  Patient,
  PatientList,
  User,
  UserInfo
} from '@/types/user'
import { request } from '@/utils/request'

// 密码登录
export const loginByPassword = (mobile: string, password: string) =>
  request<User>('/login/password', 'POST', { mobile, password })

// 发送验证码
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request('/code', 'GET', { mobile, type })

// 短信登录
export const loginByMobile = (mobile: string, code: string) =>
  request<User>('/login', 'POST', { mobile, code })

// 获取用户信息
export const getUserInfo = () => request<UserInfo>('/patient/myUser')

// 获取患者列表信息
export const getPatientList = () => request<PatientList>('/patient/mylist')

// 添加患者信息
export const addPatient = (patient: Patient) =>
  request<{ id: string }>('/patient/add', 'POST', patient)

// 编辑患者信息
export const editPatient = (patient: Patient) =>
  request<{ id: string }>('/patient/update', 'PUT', patient)

// 删除患者信息
export const delPatient = (id: string) =>
  request(`/patient/del/${id}`, 'DELETE')

// 患者详情
export const getPatientDetail = (id: string) =>
  request<Patient>(`/patient/info/${id}`)

// 未读消息数量
export const getUnreadMessageCount = () =>
  request<number>('/patient/message/unRead/all')

// QQ登录
export const loginByQQ = (openId: string) =>
  request<User>('/login/thirdparty', 'POST', { openId, source: 'qq' })

// 绑定手机号
export const bindMobile = (data: {
  mobile: string
  code: string
  openId: string
}) => request<User>('/login/binding', 'POST', data)

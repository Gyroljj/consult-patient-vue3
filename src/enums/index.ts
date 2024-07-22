// 枚举：一组可选的常量
// 需求：0 1 2 3 上下左右

// enum Direction {
//   UP = 0,
//   DOWN = 1,
//   LEFT = 2,
//   RIGHT = 3
// }

// 值默认是从0开始以此类推
// enum Direction {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT
// }

// 如果给了一个默认的数字，后面也依次类推
// enum Direction {
//   UP = 5,
//   DOWN,
//   LEFT,
//   RIGHT
// }

// 可以是字符串，不会依次类推
// enum Direction {
//   UP = 'Up',
//   DOWN = 'Down',
//   LEFT = 'Left',
//   RIGHT = 'Right'
// }

// const changeDirection = (direction: Direction) => {
//   console.log(direction)
// }

// changeDirection(Direction.DOWN)

// 问诊类型
export enum ConsultType {
  /** 找医生 */
  Doctor = 1,
  /** 快速问诊 */
  Fast = 2,
  /** 开药问诊 */
  Medication = 3
}

// 问诊时间，以1自增可以省略
export enum IllnessTime {
  /** 一周内 */
  Week = 1,
  /** 一月内 */
  Month,
  /** 半年内 */
  HalfYear,
  /** 半年以上 */
  More
}

// 消息类型
export enum MsgType {
  /** 文字聊天 */
  MsgText = 1,
  /** 消息聊天 */
  MsgImage = 4,
  /** 患者信息 */
  CardPat = 21,
  /** 处方信息 */
  CardPre = 22,
  /** 未评价信息 */
  CardEvaForm = 23,
  /** 已评价信息 */
  CardEva = 24,
  /** 通用通知 */
  Notify = 31,
  /** 温馨提示 */
  NotifyTip = 32,
  /** 取消提示 */
  NotifyCancel = 33
}

// 处方状态
export enum PrescriptionStatus {
  /** 未付款 */
  NotPayment = 1,
  /** 已付款 */
  Payment = 2,
  /** 已失效 */
  Invalid = 3
}

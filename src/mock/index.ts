import Mock from 'mockjs'

const rules = [
  // 模拟接口
  {
    url: '/patient/message/sys/list',
    method: 'get',
    timeout: 1000,
    response: () => {
      const data = []
      for (let i = 0; i < 10; i++) {
        data.push(
          Mock.mock({
            id: '@id',
            avatar: '@image("100x100")',
            title: '@ctitle(3,10)',
            content: '@ctitle(5,10)',
            createTime: '@datetime()',
            status: '@integer(0,1)',
            type: '@integer(1,3)'
          })
        )
      }
      // 返回模拟的数据
      return {
        code: 10000,
        message: '模拟数据成功',
        data
      }
    }
  }
]

export default rules

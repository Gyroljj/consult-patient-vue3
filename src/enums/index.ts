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
enum Direction {
  UP = 'Up',
  DOWN = 'Down',
  LEFT = 'Left',
  RIGHT = 'Right'
}

const changeDirection = (direction: Direction) => {
  console.log(direction)
}

changeDirection(Direction.DOWN)

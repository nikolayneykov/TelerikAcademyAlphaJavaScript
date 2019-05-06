const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let [rows, cols] = [n, n]

let matrix = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => 0)
)

let direction = 'right'
let count = 1
let row = 0
let col = 0

while (count <= rows * cols) {
  matrix[row][col] = count

  if (direction === 'right') {
    if (col < matrix[row].length - 1 && matrix[row][col + 1] === 0) {
      col++
    } else {
      direction = 'down'
      row++
    }
  } else if (direction === 'down') {
    if (row < matrix.length - 1 && matrix[row + 1][col] === 0) {
      row++
    } else {
      direction = 'left'
      col--
    }
  } else if (direction === 'left') {
    if (col > 0 && matrix[row][col - 1] === 0) {
      col--
    } else {
      direction = 'up'
      row--
    }
  } else if (direction === 'up') {
    if (row > 0 && matrix[row - 1][col] === 0) {
      row--
    } else {
      direction = 'right'
      col++
    }
  }

  count++
}

matrix.forEach(arr => print(arr.join(' ')))

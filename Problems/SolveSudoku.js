const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = [
  '53--7----',
  '6--195---',
  '-98----6-',
  '8---6---3',
  '4--8-3--1',
  '7---2---6',
  '-6----28-',
  '---419--5',
  '----8--79'
]

const gets = this.gets || getGets(test)
const print = this.print || console.log

let matrix = Array.from({ length: 9 }, () =>
  gets()
    .split('')
    .map(x => (Number.isInteger(+x) ? +x : 0))
)

function solve (row, col) {
  if (row === 9 && col === 0) {
    throw new Error()
  } else if (matrix[row][col] === 0) {
    for (let i = 1; i <= 9; i++) {
      if (!checkRow(row, i) && !checkCol(col, i) && !checkSquare(row, col, i)) {
        matrix[row][col] = i
        solve(nextRow(row, col), nextCol(col))
        matrix[row][col] = 0
      }
    }
  } else {
    solve(nextRow(row, col), nextCol(col))
  }
}

function checkRow (row, num) {
  return matrix[row].includes(num)
}

function checkCol (col, num) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] === num) {
      return true
    }
  }

  return false
}

function checkSquare (row, col, num) {
  let startRow = Math.floor(row / 3) * 3
  let startCol = Math.floor(col / 3) * 3

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (matrix[i][j] === num) {
        return true
      }
    }
  }

  return false
}

function nextRow (row, col) {
  col++
  if (col > 8) {
    row++
  }

  return row
}

function nextCol (col) {
  col++
  if (col > 8) {
    col = 0
  }

  return col
}

try {
  solve(0, 0)
} catch (error) {
  print(matrix.map(x => x.join('')).join('\n'))
}

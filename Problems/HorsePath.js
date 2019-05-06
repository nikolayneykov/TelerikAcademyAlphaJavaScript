const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['5']

const gets = this.gets || getGets(test)
const print = this.print || console.log
let n = +gets()
let matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
let [row, col, count] = [0, 0, 2]
matrix[0][0] = 1

function validSpot (row, col) {
  return (
    row >= 0 &&
    row < matrix.length &&
    col >= 0 &&
    col < matrix[row].length &&
    matrix[row][col] === 0
  )
}

while (count <= n * n) {
  if (validSpot(row - 2, col - 1)) {
    row -= 2
    col -= 1
    matrix[row][col] = count
    count++
  } else if (validSpot(row - 2, col + 1)) {
    row -= 2
    col += 1
    matrix[row][col] = count
    count++
  } else if (validSpot(row - 1, col - 2)) {
    row -= 1
    col -= 2
    matrix[row][col] = count
    count++
  } else if (validSpot(row - 1, col + 2)) {
    row -= 1
    col += 2
    matrix[row][col] = count
    count++
  } else if (validSpot(row + 1, col - 2)) {
    row += 1
    col -= 2
    matrix[row][col] = count
    count++
  } else if (validSpot(row + 1, col + 2)) {
    row += 1
    col += 2
    matrix[row][col] = count
    count++
  } else if (validSpot(row + 2, col - 1)) {
    row += 2
    col -= 1
    matrix[row][col] = count
    count++
  } else if (validSpot(row + 2, col + 1)) {
    row += 2
    col += 1
    matrix[row][col] = count
    count++
  } else {
    let foundSpot = false
    for (let i = 0; i < matrix.length && !foundSpot; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][j] = count
          row = i
          col = j
          count++
          foundSpot = true
          break
        }
      }
    }
  }
}

print(matrix.map(x => x.join(' ')).join('\n'))

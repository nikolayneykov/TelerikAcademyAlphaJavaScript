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
  '5 5',
  '1 1 3 3 5',
  '-6 -7 2 -3 -1',
  '3 0 -4 5 9',
  '7 -7 0 1 0',
  '-7 -6 -4 -4 9'
]

const gets = this.gets || getGets(test)
const print = this.print || console.log

let rows = +gets().split(' ')[0]

let matrix = []

for (let i = 0; i < rows; i++) {
  matrix.push(
    gets()
      .split(' ')
      .map(Number)
  )
}

let bestSum = Number.MIN_SAFE_INTEGER

for (let row = 0; row < matrix.length - 2; row++) {
  for (let col = 0; col < matrix[row].length - 1; col++) {
    let currentSum =
      matrix[row][col] +
      matrix[row][col + 1] +
      matrix[row][col + 2] +
      matrix[row + 1][col] +
      matrix[row + 1][col + 1] +
      matrix[row + 1][col + 2] +
      matrix[row + 2][col] +
      matrix[row + 2][col + 1] +
      matrix[row + 2][col + 2]

    if (currentSum > bestSum) {
      bestSum = currentSum
    }
  }
}

print(bestSum)

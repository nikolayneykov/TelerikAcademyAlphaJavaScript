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
  '6 6',
  '92 11 23 42 59 48',
  '09 92 23 72 56 14',
  '17 63 92 46 85 95',
  '34 12 52 69 23 95',
  '26 88 78 71 29 95',
  '26 34 16 63 39 95'
]

const gets = this.gets || getGets(test)
const print = this.print || console.log

function getSequenceLength (arr) {
  return Math.max(
    ...arr.reduce((acc, e, i) => {
      acc.push(1)
      let index = i
      while (index < arr.length - 1 && arr[index] === arr[index + 1]) {
        acc[i]++
        index++
      }

      return acc
    }, [])
  )
}

let rows = +gets().split(' ')[0]

let matrix = []
for (let i = 0; i < rows; i++) {
  matrix.push(gets().split(' '))
}

let bestSequenceLength = 0

for (let arr of matrix) {
  let sequenceLength = getSequenceLength(arr)

  if (sequenceLength > bestSequenceLength) {
    bestSequenceLength = sequenceLength
  }
}

for (let col = 0; col < matrix[0].length; col++) {
  let arr = []
  for (let row = 0; row < matrix.length; row++) {
    arr.push(matrix[row][col])
  }

  let sequenceLength = getSequenceLength(arr)

  if (sequenceLength > bestSequenceLength) {
    bestSequenceLength = sequenceLength
  }
}

for (let row = 0, col = 0; col < matrix[row].length; col++) {
  let arr = []

  for (
    let r = row, c = col;
    r < matrix.length && c < matrix[r].length;
    r++, c++
  ) {
    arr.push(matrix[r][c])
  }

  let sequenceLength = getSequenceLength(arr)

  if (sequenceLength > bestSequenceLength) {
    bestSequenceLength = sequenceLength
  }
}

for (let row = 0, col = 0; row < matrix.length; row++) {
  let arr = []

  for (
    let r = row, c = col;
    r < matrix.length && c < matrix[r].length;
    r++, c++
  ) {
    arr.push(matrix[r][c])
  }

  let sequenceLength = getSequenceLength(arr)

  if (sequenceLength > bestSequenceLength) {
    bestSequenceLength = sequenceLength
  }
}

for (let row = matrix.length - 1, col = 0; row >= 0; row--) {
  let arr = []
  for (let r = row, c = col; r >= 0 && c < matrix[r].length; r--, c++) {
    arr.push(matrix[r][c])
  }

  let sequenceLength = getSequenceLength(arr)
  if (sequenceLength > bestSequenceLength) {
    bestSequenceLength = sequenceLength
  }
}

for (let row = matrix.length - 1, col = 0; col < matrix[row].length; col++) {
  let arr = []
  for (let r = row, c = col; r >= 0 && c < matrix[r].length; r--, c++) {
    arr.push(matrix[r][c])
  }

  let sequenceLength = getSequenceLength(arr)
  if (sequenceLength > bestSequenceLength) {
    bestSequenceLength = sequenceLength
  }
}

print(bestSequenceLength)

const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '3', '2 3 1', '5 4 6', '9 0 3', '8 5 2']
// const test = ['4', '4', '1 8 9 6', '1 4.3 2.7 -3', '1 -64 3 3', '1 1 1 1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

class PriorityQueue {
  constructor (compare) {
    this.heap = [1]
    this.compare = compare
  }

  get top () {
    return this.heap[1]
  }

  get count () {
    return this.heap.length - 1
  }

  get isEmpty () {
    return this.count === 0
  }

  enqueue (value) {
    let index = this.heap.length
    this.heap.push(value)

    while (index > 1 && this.compare(value, this.heap[(index / 2) | 0])) {
      this.heap[index] = this.heap[(index / 2) | 0]
      index /= 2
      index |= 0
    }

    this.heap[index] = value
  }

  dequeue () {
    const toReturn = this.heap[1]
    const value = this.heap.pop()

    if (!this.isEmpty) {
      this.heapifyDown(1, value)
    }

    return toReturn
  }

  heapifyDown (index, value) {
    while (index * 2 + 1 < this.heap.length) {
      const smallerKidIndex = this.compare(
        this.heap[index * 2],
        this.heap[index * 2 + 1]
      )
        ? index * 2
        : index * 2 + 1

      if (this.compare(this.heap[smallerKidIndex], value)) {
        this.heap[index] = this.heap[smallerKidIndex]
        index = smallerKidIndex
      } else {
        break
      }
    }

    if (index * 2 < this.heap.length) {
      const smallerKidIndex = index * 2

      if (this.compare(this.heap[smallerKidIndex], value)) {
        this.heap[index] = this.heap[smallerKidIndex]
        index = smallerKidIndex
      }
    }

    this.heap[index] = value
  }
}

class Vector {
  constructor (row, col, number) {
    this.row = row
    this.col = col
    this.number = number
  }
}

const isValid = (row, rows, col, cols, used) => {
  return col >= 0 && col < cols && row >= 0 && row < rows && !used[row][col]
}

const rows = +gets()
const cols = +gets()

const field = []

for (let i = 0; i < rows; i += 1) {
  field.push(
    gets()
      .split(' ')
      .map(Number)
  )
}

const deltaOdd = [[1, 1, 0, 0, -1, -1], [0, -1, -1, 1, 0, -1]]

const deltaEven = [[1, 1, 0, 0, -1, -1], [0, 1, -1, 1, 0, 1]]

const sumTo = []
for (let i = 0; i < rows; i += 1) {
  const line = Array.from(Array(cols), () => Number.MAX_SAFE_INTEGER)
  sumTo.push(line)
}

sumTo[0][0] = Math.abs(field[0][0])

const used = Array.from(Array(rows), () => Array.from(Array(cols), () => false))

const q = new PriorityQueue((a, b) => a.number < b.number)
q.enqueue(new Vector(0, 0, Math.abs(field[0][0])))

while (q.count > 0) {
  const x = q.dequeue()

  used[x.row][x.col] = true

  const row = x.row
  const col = x.col
  const sum = sumTo[row][col]

  const currentDelta = (row & 1) === 1 ? deltaEven : deltaOdd

  for (let i = 0; i < 6; i += 1) {
    const newRow = row + currentDelta[0][i]
    const newCol = col + currentDelta[1][i]

    if (isValid(newRow, rows, newCol, cols, used)) {
      const damage = Math.abs(field[row][col] - field[newRow][newCol])

      if (sum + damage < sumTo[newRow][newCol]) {
        sumTo[newRow][newCol] = sum + damage
        q.enqueue(new Vector(newRow, newCol, sumTo[newRow][newCol]))
      }
    }
  }
}

const result = sumTo[rows - 1][cols - 1] + Math.abs(field[rows - 1][cols - 1])

print(result.toFixed(2))

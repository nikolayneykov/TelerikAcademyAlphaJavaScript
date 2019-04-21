const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['a', '1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let labelInput = gets()
let rankInput = gets()
let board = {}

for (let i = 97; i <= 104; i++) {
  let label = String.fromCharCode(i)
  if (!board.hasOwnProperty(label)) {
    board[label] = []
  }

  for (let j = 0; j <= 8; j++) {
    if (i % 2 === 1 && j % 2 === 0) {
      board[label].push('dark')
    } else if (i % 2 === 1 && j % 2 === 1) {
      board[label].push('light')
    } else if (i % 2 === 0 && j % 2 === 0) {
      board[label].push('light')
    } else if (i % 2 === 0 && j % 2 === 1) {
      board[label].push('dark')
    }
  }
}

print(board[labelInput][rankInput - 1])

const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

for (let row = 1; row <= n; row++) {
  let currentLine = []

  for (let col = row; col < n + row; col++) {
    currentLine.push(col)
  }

  print(currentLine.join(' '))
}

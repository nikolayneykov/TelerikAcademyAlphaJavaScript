const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1', '2', '3', '4', '2', '8']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let result = Array.from({ length: 4 }, () => +gets())
let [rows, cols] = [+gets(), +gets()]

while (result.length < rows * cols) {
  result.push(result.slice(-4).reduce((acc, el) => acc + el))
}

for (let index = 0; index < result.length; index += cols) {
  print(result.slice(index, index + cols).join(' '))
}

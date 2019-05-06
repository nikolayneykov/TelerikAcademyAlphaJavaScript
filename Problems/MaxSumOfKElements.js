const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['8', '3', '3', '2', '3', '-2', '5', '4', '2', '7']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let k = +gets()
let arr = []

for (let i = 0; i < n; i++) {
  arr.push(+gets())
}

let maxSum = arr
  .sort((a, b) => b - a)
  .slice(0, k)
  .reduce((acc, c) => acc + c, 0)

print(maxSum)

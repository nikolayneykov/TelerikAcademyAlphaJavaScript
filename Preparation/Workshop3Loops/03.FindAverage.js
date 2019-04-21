const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '2.5', '1.25', '3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let arr = []

for (let i = 0; i < n; i++) {
  arr.push(+gets())
}

let average = arr.reduce((a, b) => a + b, 0) / arr.length

print(average.toFixed(2))

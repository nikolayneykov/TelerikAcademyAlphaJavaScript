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

let matrix = Array.from({ length: n }, (v1, i1) =>
  Array.from({ length: n }, (v2, i2) => i1 + i2 + 1).join(' ')
).join('\n')

print(matrix)

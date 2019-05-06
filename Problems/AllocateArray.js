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

for (let i = 0; i < n; i++) {
  print(i * 5)
}

const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1,1,1,1,1,1,1,1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(',')
  .map(Number)
let indexes = arr.map((e, i) => i + 1)

let result = indexes.filter(x => !arr.includes(x)).join(',')

print(result)

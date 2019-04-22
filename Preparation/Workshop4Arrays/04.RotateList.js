const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['5,3,2,1', '2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets().split(',')
let index = +gets() % arr.length
let result = arr
  .slice(index)
  .concat(arr.slice(0, index))
  .join(',')

print(result)

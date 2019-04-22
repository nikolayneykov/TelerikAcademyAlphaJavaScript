const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['0,0,0,5,0,3,2,3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(',')
  .map(Number)

let nonZeroesArr = arr.filter(x => x !== 0)
let zeroesArr = arr.filter(x => x === 0)
let result = nonZeroesArr.concat(zeroesArr).join(',')

print(result)

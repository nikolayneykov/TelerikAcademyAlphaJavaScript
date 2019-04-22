const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3,-12,0,0,13,5,1,0,-2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(',')
  .map(Number)

let leftPartArr = arr.filter(x => x < 0)
let midPartArr = arr.filter(x => x === 0)
let rightPartArr = arr.filter(x => x > 0)

let result = leftPartArr.concat(midPartArr.concat(rightPartArr)).join(',')

print(result)

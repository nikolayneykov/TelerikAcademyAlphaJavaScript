const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2,3,1', '5,2,3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let firstList = gets().split(',')
let secondList = gets().split(',')

let result = firstList
  .reduce((acc, el, index) => {
    acc.push(el)
    acc.push(secondList[index])
    return acc
  }, [])
  .join(',')

print(result)

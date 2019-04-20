const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10', '10']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let halfLiterBottles = +gets()
let oneLiterBottles = +gets()
let deposits = halfLiterBottles * 0.1 + oneLiterBottles * 0.25
print(deposits.toFixed(2))

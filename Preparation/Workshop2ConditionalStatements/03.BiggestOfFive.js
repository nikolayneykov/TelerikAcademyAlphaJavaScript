const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['-0.5', '-4', '-5', '-10', '0']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let num1 = +gets()
let num2 = +gets()
let num3 = +gets()
let num4 = +gets()
let num5 = +gets()

print(Math.max(num1, num2, num3, num4, num5))

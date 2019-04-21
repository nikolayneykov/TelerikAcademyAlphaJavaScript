const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '13.50', '19.99', '29.99', '39.99']

const gets = this.gets || getGets(test)
const print = this.print || console.log
let n = +gets()

for (let i = 0; i < n; i++) {
  let price = +gets()
  price += price.toFixed(3)[3] === '5' ? 0.01 : 0

  let discount = price * 0.65
  price -= discount

  print(price.toFixed(2))
}

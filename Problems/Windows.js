const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3 2', '10 20 1', '30 40 0', '20 20 1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let price = 0
let [n, c] = gets()
  .split(' ')
  .map(Number)

for (let i = 0; i < n; i++) {
  let [width, height, broken] = gets()
    .split(' ')
    .map(Number)

  if (broken) {
    price += width * height * c
  }
}

print(price)

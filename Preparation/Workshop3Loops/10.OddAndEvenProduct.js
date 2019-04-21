const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['5', '2', '1', '1', '6', '3']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let oddProduct = 1
let evenProduct = 1

let n = +gets()

for (let i = 1; i <= n; i++) {
  if (i % 2 === 1) {
    oddProduct *= +gets()
  } else if (i % 2 === 0) {
    evenProduct *= +gets()
  }
}

print(
  oddProduct === evenProduct
    ? `yes ${oddProduct}`
    : `no ${oddProduct} ${evenProduct}`
)

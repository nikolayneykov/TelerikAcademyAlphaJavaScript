const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['8', '3']
const gets = this.gets || getGets(test)
const print = this.print || console.log

function getFactorial (n) {
  let factorial = 1
  for (let i = 1; i <= n; i++) {
    factorial *= i
  }

  return factorial
}

let [n, k] = [+gets(), +gets()]

print(getFactorial(n) / getFactorial(k))

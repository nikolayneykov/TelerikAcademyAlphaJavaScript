const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '2']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let [n, x, sum] = [+gets(), +gets(), 1]

function getFactorial (n) {
  let factorial = 1
  for (let i = 1; i <= n; i++) {
    factorial *= i
  }

  return factorial
}
for (let i = 1; i <= n; i++) {
  sum += getFactorial(i) / x ** i
}

print(sum.toFixed(5))

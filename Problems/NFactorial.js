const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [n, result] = [+gets(), 1]

for (let i = 1; i <= n; i++) {
  result *= i
}

print(result)

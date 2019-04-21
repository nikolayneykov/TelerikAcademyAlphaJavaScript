const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let result = []

for (let i = 1; i <= n; i++) {
  if (i % 3 !== 0 && i % 7 !== 0) {
    result.push(i)
  }
}

print(result.join(' '))

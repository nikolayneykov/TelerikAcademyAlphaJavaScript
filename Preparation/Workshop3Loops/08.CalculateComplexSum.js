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

let memo = {}
function factoriel (num) {
  if (memo.hasOwnProperty(num)) {
    return memo[num]
  } else if (num === 0) {
    return 1
  }

  memo[num] = num * factoriel(num - 1)
  return memo[num]
}

let sum = 1

let n = +gets()
let x = +gets()

for (let i = 1; i <= n; i++) {
  sum += factoriel(i) / Math.pow(x, i)
}

print(sum.toFixed(5))

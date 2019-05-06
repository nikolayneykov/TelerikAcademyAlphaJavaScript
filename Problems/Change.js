const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['101 101']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let [a, b] = gets()
  .split(' ')
  .map(x => x.split('').map(Number))

if (a.toString() === b.toString()) {
  print(0)
} else {
  let result = []

  for (let i = a.length - 1, j = b.length - 1; i >= 0; i--, j--) {
    if (j < 0) {
      result[i] = a[i]
    } else if (a[i] >= b[j]) {
      result[i] = a[i] - b[j]
    } else {
      result[i] = 10 + a[i] - b[j]
      for (let k = i - 1; k >= 0; k--) {
        if (a[k] > 0) {
          a[k]--
          break
        } else {
          a[k] = 9
        }
      }
    }
  }

  print(result.join('').replace(/^0+/, ''))
}

const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
// const test = ['1010101010101011']
const test = ['4 3']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let [n, k] = gets()
  .split(' ')
  .map(Number)

function getCombinations (next, index, n, k, arr) {
  if (index === k) {
    print(arr.join(' '))
    return
  }

  for (let i = next; i <= n; i++) {
    arr[index] = i
    getCombinations(arr[index], index + 1, n, k, arr)
  }
}

getCombinations(1, 0, n, k, [])

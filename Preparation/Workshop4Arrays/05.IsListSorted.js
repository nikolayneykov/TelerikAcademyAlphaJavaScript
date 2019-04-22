const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,2,2,3,2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()

for (let i = 0; i < n; i++) {
  let arr = gets()
    .split(',')
    .map(Number)
  let isSorted = arr.every(
    (e, i) => e <= (i < arr.length - 1 ? arr[i + 1] : arr[i])
  )

  print(isSorted)
}

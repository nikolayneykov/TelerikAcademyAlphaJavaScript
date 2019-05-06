const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '1 2 3 2 1', '2 1', '1 2 2 1', '4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const n = +gets()

for (let i = 0; i < n; i++) {
  let arr = gets().split(' ')
  print(arr.join('') === arr.reverse().join('') ? 'Yes' : 'No')
}

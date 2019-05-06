const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['1 2 3 4 5 6 7']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = gets()
  .split(' ')
  .map(Number)

print(arr.filter(x => x % 3 === 0).join(' '))
print(arr.filter(x => x % 3 === 1).join(' '))
print(arr.filter(x => x % 3 === 2).join(' '))

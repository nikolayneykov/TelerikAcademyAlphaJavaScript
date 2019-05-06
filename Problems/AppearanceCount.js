const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['8', '28 6 21 6 - 7856 73 73 - 56', '73']

const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()
let arr = gets().split(' ')
let num = gets()

let occurencesCount = arr.filter(x => x === num).length

print(occurencesCount)

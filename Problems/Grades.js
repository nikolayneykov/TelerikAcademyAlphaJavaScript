const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['6', '10 9 9 6 7 2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

gets()
const grades = gets()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)
  .slice(1, -1)

let averageGrade = Math.round(
  grades.reduce((acc, num) => acc + num, 0) / grades.length
)

print(averageGrade)

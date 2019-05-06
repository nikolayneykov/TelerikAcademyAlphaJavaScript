const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['8', '7', '3', '2', '3', '5', '2', '2', '4']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let arr = []
let n = +gets()

while (n >= 0) {
  arr.push(+gets())
  n--
}

let maxIncreasingSequence = Math.max(
  ...arr.reduce((acc, c, i) => {
    acc[i] = 1
    let index = i
    while (index < arr.length - 1 && arr[index] < arr[index + 1]) {
      acc[i]++
      index++
    }

    return acc
  }, [])
)

print(maxIncreasingSequence)

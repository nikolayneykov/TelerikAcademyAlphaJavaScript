const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let n = +gets()
let arr = []

while (n >= 0) {
  arr.push(+gets())
  n--
}

let sequences = Math.max(
  ...arr.reduce((acc, e, i) => {
    acc.push(1)
    let index = i
    while (index < arr.length - 1 && arr[index] === arr[index + 1]) {
      acc[i]++
      index++
    }

    return acc
  }, [])
)

print(sequences)

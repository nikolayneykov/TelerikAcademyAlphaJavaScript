const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = [
  '13',
  '4',
  '1',
  '1',
  '4',
  '2',
  '3',
  '4',
  '4',
  '1',
  '2',
  '4',
  '9',
  '3'
]

const gets = this.gets || getGets(test)
const print = this.print || console.log

let numbers = {}

let n = +gets()

while (n > 0) {
  let currentNumber = gets()

  if (!numbers.hasOwnProperty(currentNumber)) {
    numbers[currentNumber] = 0
  }

  numbers[currentNumber]++
  n--
}

let [num, times] = Object.entries(numbers).sort((a, b) => b[1] - a[1])[0]

print(`${num} (${times} times)`)

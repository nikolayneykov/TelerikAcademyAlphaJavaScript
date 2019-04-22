const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4', '12', '23', '34', '45']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let numbers = []

let n = +gets()
for (let i = 0; i < n; i++) {
  numbers.push(gets())
}

let merged = numbers
  .reduce((acc, el, index, arr) => {
    if (index < arr.length - 1) {
      acc.push(`${el[1]}${arr[index + 1][0]}`)
    }

    return acc
  }, [])
  .join(' ')

let squashed = numbers
  .reduce((acc, el, i, arr) => {
    if (i < arr.length - 1) {
      let middle = (Number(el[1]) + Number(arr[i + 1][0])) % 10
      acc.push(`${el[0]}${middle}${arr[i + 1][1]}`)
    }

    return acc
  }, [])
  .join(' ')

print(merged)
print(squashed)

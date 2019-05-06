const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['17']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const bear = 2
const human = 5
const chicken = 7
let count = 0

let n = +gets()

for (let i = 0; i <= Math.floor(n / chicken); i++) {
  for (let j = 0; j <= Math.floor(n / human); j++) {
    for (let k = 0; k <= Math.floor(n / bear); k++) {
      if (n - (chicken * i + human * j + bear * k) === 0) {
        count++
      }
    }
  }
}

print(count)

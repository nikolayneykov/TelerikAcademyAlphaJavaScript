const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test

const test = ['happy']
const gets = this.gets || getGets(test)
const print = this.print || console.log

let input = gets()

let s1 = input[0]
let s2 = s1

for (let i = 1; i < input.length; i++) {
  s2 = s1 + input[i] + s1
  s1 = s2
}

print(s2)

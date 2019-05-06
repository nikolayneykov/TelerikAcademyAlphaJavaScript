const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['10 5']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [count, amount] = gets()
  .split(' ')
  .map(Number)

let result = 0

let potionVolume = 0
for (let i = 0; i <= count; i++, potionVolume += i) {
  if ((i + 1) % 2 === 1 && potionVolume >= amount) {
    result = i + 1
    break
  }
}

print(result)

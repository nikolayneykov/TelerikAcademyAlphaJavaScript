const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['20']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let milesPerGalon = +gets()
let liters = Math.floor((4.54 / 1.6 / milesPerGalon) * 100)

print(`${liters} litres per 100 km`)

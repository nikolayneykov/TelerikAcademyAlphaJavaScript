const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['3', '20 15 400', '10 30 320', '5 0 40']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let totalTimeMinutes = 0
let bestDay = 0
let bestAvgSpeed = 0

const n = +gets()

for (let day = 1; day <= n; day++) {
  let [hours, minutes, distance] = gets()
    .split(' ')
    .map(Number)
  minutes += hours * 60
  distance *= 1000
  let avg = distance / minutes

  if (avg > bestAvgSpeed) {
    bestDay = day
    bestAvgSpeed = avg
  }

  totalTimeMinutes += minutes
}

let days = Math.floor(totalTimeMinutes / 60 / 24)
let hours = Math.floor((totalTimeMinutes / 60) % 24)
let minutes = totalTimeMinutes % 60

print(`${days} ${hours} ${minutes} ${bestDay}`)

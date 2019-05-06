const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['4 4', '#..#', '..X.', '..X.', '#XX#']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let rows = +gets()
  .split(' ')[0]

let parking = Array.from({ length: rows }, () => {
  for (let i = 0; i < rows; i++) {
    return gets().split('')
  }
})

let [free, oneCar, twoCars, threeCars, fourCars] = [0, 0, 0, 0, 0]

for (let row = 0; row < parking.length - 1; row++) {
  for (let col = 0; col < parking[row].length; col++) {
    let symbols = [
      parking[row][col],
      parking[row][col + 1],
      parking[row + 1][col],
      parking[row + 1][col + 1]
    ]
    let [freeSpot, taken] = [
      symbols.filter(s => s === '.').length,
      symbols.filter(s => s === 'X').length
    ]
    if (freeSpot === 4) {
      free++
    } else if (freeSpot === 3 && taken === 1) {
      oneCar++
    } else if (freeSpot === 2 && taken === 2) {
      twoCars++
    } else if (freeSpot === 1 && taken === 3) {
      threeCars++
    } else if (taken === 4) {
      fourCars++
    }
  }
}

print(`${free}\n${oneCar}\n${twoCars}\n${threeCars}\n${fourCars}\n`)

const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['2002']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let remainder = +gets() % 12

let zodiacSign = ''

switch (remainder) {
  case 0:
    zodiacSign = 'Monkey'
    break
  case 1:
    zodiacSign = 'Rooster'
    break
  case 2:
    zodiacSign = 'Dog'
    break
  case 3:
    zodiacSign = 'Pig'
    break
  case 4:
    zodiacSign = 'Rat'
    break
  case 5:
    zodiacSign = 'Ox'
    break
  case 6:
    zodiacSign = 'Tiger'
    break
  case 7:
    zodiacSign = 'Hare'
    break
  case 8:
    zodiacSign = 'Dragon'
    break
  case 9:
    zodiacSign = 'Snake'
    break
  case 10:
    zodiacSign = 'Horse'
    break
  case 11:
    zodiacSign = 'Rooster'
    break
}

print(zodiacSign)

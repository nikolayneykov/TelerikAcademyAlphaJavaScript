const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['April', '6']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let month = gets()
let date = +gets()
let result = ''
switch (month) {
  case 'January':
    result = 'Winter'
    break
  case 'February':
    result = 'Winter'
    break
  case 'March':
    result = date < 20 ? 'Winter' : 'Spring'
    break
  case 'April':
    result = 'Spring'
    break
  case 'May':
    result = 'Spring'
    break
  case 'June':
    result = date < 21 ? 'Spring' : 'Summer'
    break
  case 'July':
    result = 'Summer'
    break
  case 'August':
    result = 'Summer'
    break
  case 'September':
    result = date < 22 ? 'Summer' : 'Autumn'
    break
  case 'October':
    result = 'Autumn'
    break
  case 'November':
    result = 'Autumn'
    break
  case 'December':
    result = date < 20 ? 'Autumn' : 'Winter'
    break
  default:
    throw new Error('Invalid input!')
}

print(result)

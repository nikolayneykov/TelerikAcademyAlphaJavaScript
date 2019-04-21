const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['-5', '3', '-2']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let num1 = +gets()
let num2 = +gets()
let num3 = +gets()
let result = ''

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    result = `${num1} ${num2} ${num3}`
  } else {
    result = `${num1} ${num3} ${num2}`
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    result = `${num2} ${num1} ${num3}`
  } else {
    result = `${num2} ${num3} ${num1}`
  }
} else if (num3 >= num1 && num3 >= num2) {
  if (num1 >= num2) {
    result = `${num3} ${num1} ${num2}`
  } else {
    result = `${num3} ${num2} ${num1}`
  }
}

print(result)

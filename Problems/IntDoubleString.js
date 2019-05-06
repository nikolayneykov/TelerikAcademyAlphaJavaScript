const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['text', 'gosho']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let [type, value] = [gets(), gets()]

let result = ''

if (type === 'integer') {
  result = +value + 1
} else if (type === 'real') {
  result = (+value + 1).toFixed(2)
} else if (type === 'text') {
  result = value + '*'
}

print(result)

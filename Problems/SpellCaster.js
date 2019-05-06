const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['Hi exam']

const gets = this.gets || getGets(test)
const print = this.print || console.log

let sentence = gets()
  .split(' ')
  .map(x => x.split(''))

let [extractedCharacters, hasElements] = [[], true]

while (hasElements) {
  hasElements = false
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length > 0) {
      extractedCharacters.push(sentence[i].pop())
      hasElements = true
    }
  }
}
for (let i = 0; i < extractedCharacters.length; i++) {
  let char = extractedCharacters[i]
  let index =
    (i + char.toLowerCase().charCodeAt(0) - 96) % extractedCharacters.length
  extractedCharacters.splice(i, 1)
  extractedCharacters.splice(index, 0, char)
}

print(extractedCharacters.join(''))

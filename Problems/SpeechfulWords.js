const getGets = arr => {
  let index = 0

  return () => {
    const toReturn = arr[index]
    index += 1
    return toReturn
  }
}
// this is the test
const test = ['aabb']

const gets = this.gets || getGets(test)
const print = this.print || console.log

const letters = gets().split('')
const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
const [vowelCount, consonantsCount] = [
  letters.filter(l => vowels.includes(l)).length,
  letters.filter(l => !vowels.includes(l)).length
]

print(
  vowelCount === consonantsCount ? 'Yes' : `${vowelCount} ${consonantsCount}`
)

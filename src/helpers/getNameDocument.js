export const getNameDocument = (x) => {
  let name = x.split('-')
  name.shift()
  let nameDocument = ''
  name.map((elemento) => {
    if (!(elemento === "")) {
      nameDocument += elemento + ' '
    }
  })
  return nameDocument
}
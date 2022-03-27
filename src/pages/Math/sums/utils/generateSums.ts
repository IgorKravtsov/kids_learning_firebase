import { MathSums } from '../../types/math.interface'
import { generateExample, generateNumsArray } from './common'

const difficultyLevelForDivision = 1

const createPlusMultipleExamples = (depth = 2, maxNumber = 99, type: string): MathSums => {
  const arr = generateNumsArray(depth, maxNumber)
  const example = generateExample(arr, depth, type)

  return {
    example: example.replaceAll('/', ':'),
    answer: eval(example),
  }
}

const createMinusDivideExamples = (depth = 2, maxNumber = 99, type: string): MathSums => {
  const arr = generateNumsArray(depth, maxNumber)
  let tmpType = ''
  if (type === '-') {
    tmpType = '+'
  } else if (type === '/') {
    tmpType = '*'
  }

  const answer = eval(generateExample(arr, depth, tmpType))
  let example = `${answer}${type}`
  for (let i = 1; i < arr.length; i++) {
    example += i !== arr.length - 1 ? `${arr[i]}${type}` : arr[i]
  }
  return {
    example: example.replaceAll('/', ':'),
    answer: arr[0],
  }
}

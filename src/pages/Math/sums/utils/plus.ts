import { MathSums } from '../../types/math.interface'
import { generateExample, generateNumsArray } from './common'

export const createPlusExamples = (depth = 2, maxNumber = 99): MathSums => {
  const arr = generateNumsArray(depth, maxNumber)
  const example = generateExample(arr, depth, '+')

  return {
    example,
    answer: eval(example),
  }
}

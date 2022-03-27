import { MathSums } from '../../types/math.interface'
import { generateExample, generateNumsArray } from './common'

export const createMultipleExamples = (depth = 2, maxNumber = 99): MathSums => {
  const arr = generateNumsArray(depth, maxNumber / 3)
  const example = generateExample(arr, depth, '*')

  return {
    example,
    answer: eval(example),
  }
}

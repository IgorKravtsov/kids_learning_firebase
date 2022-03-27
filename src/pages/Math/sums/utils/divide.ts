import { MathSums } from '../../types/math.interface'
import { generateExample, generateNumsArray } from './common'

const divideDifficulty = 7

const generateNumsDivideArray = (depth = 2, maxNumber = 99) => {
  const res: number[] = []

  for (let i = 0; i < depth; i++) {
    if (i === 1) {
      res.push(Math.floor(Math.random() * divideDifficulty * 10 + 1))
    } else {
      res.push(Math.floor(Math.random() * maxNumber * 10 + 1))
    }
  }

  return res
}

export const createDivideExamples = (depth = 2, maxNumber = 99): MathSums => {
  const arr = generateNumsDivideArray(depth, maxNumber)

  const answer = eval(generateExample(arr, depth, '*'))

  let example = `${answer}:`
  for (let i = 1; i < arr.length; i++) {
    example += i !== arr.length - 1 ? `${arr[i]}:` : arr[i]
  }
  return {
    example,
    answer: arr[0],
  }
}

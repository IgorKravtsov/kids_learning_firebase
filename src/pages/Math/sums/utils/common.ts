export const generateNumsArray = (depth = 2, maxNumber = 99): number[] => {
  const res: number[] = []

  for (let i = 0; i < depth; i++) {
    res.push(Math.floor(Math.random() * maxNumber + 1))
  }

  return res
}

export const generateExample = (arr: number[], depth: number, type: string): string => {
  let res = ''
  for (let i = 0; i < depth; i++) {
    res += i === depth - 1 ? arr[i] : `${arr[i]}${type}`
  }
  return res
}

export function shuffleArray<T>(arr: T[]): T[] {
  const res: T[] = [...arr]
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    let temp = res[i]
    res[i] = res[j]
    res[j] = temp
  }
  return res
}

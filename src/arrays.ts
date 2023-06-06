export function product<T>(arr: T[], repeat: number = 1) {
  const result: T[][] = []

  function recursor(arr: T[], repeat: number, current: T[] = []) {
    if (repeat === 0) {
      result.push(current)
      return
    } else {
      for (let i = 0; i < arr.length; i++) {
        recursor(arr, repeat - 1, [...current, arr[i]])
      }
    }
  }

  recursor(arr, repeat)
  return result
}

export function zip(...args: any[][]) {
  const result: any[][] = []
  const maxLength = Math.max(...args.map((arr) => arr.length))
  for (let i = 0; i < maxLength; i++) {
    result.push(args.map((arr) => arr[i]))
  }
  return result
}

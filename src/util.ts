export const min = (value1: any, value2: any) => {
  return value1 < value2 ? value1 : value2;
}

export const avg = (array: any[]) => Math.floor(array.reduce((a, b) => a + b, 0) / array.length);
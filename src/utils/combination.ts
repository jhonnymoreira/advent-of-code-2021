export const combination = (arr: any[], chunkSize: number) =>
  arr
    .map((_, index, reference) => reference.slice(index, index + chunkSize))
    .slice(0, -(chunkSize - 1));

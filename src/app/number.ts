export function add(number: number[]) {
  return number.reduce((prev, curr) => prev + curr, 0);
}

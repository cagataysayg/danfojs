/**
 * CUSTOM
 */
function variance(arr: number[]): number {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.reduce((sum, val) => sum + (val - mean) ** 2, 0) / arr.length;
}

function std(arr: number[]): number {
  return Math.sqrt(variance(arr));
}

function median(arr: number[]): number {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function mode(arr: number[]): number[] {
  const counts = new Map<number, number>();
  let maxFreq = 0;
  let modes: number[] = [];

  for (const num of arr) {
    const count = (counts.get(num) || 0) + 1;
    counts.set(num, count);
    maxFreq = Math.max(maxFreq, count);
  }

  // @ts-ignore
  for (const [num, count] of counts) {
    if (count === maxFreq) {
      modes.push(num);
    }
  }

  return modes;
}

export { variance, std, median, mode };

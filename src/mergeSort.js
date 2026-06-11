export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIdx = Math.round(arr.length / 2);

  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {
  const merged = [];

  const m = leftArr.length;
  const n = rightArr.length;

  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (leftArr[i] < rightArr[j]) {
      merged.push(leftArr[i++]);
    } else {
      merged.push(rightArr[j++]);
    }
  }
  for (; i < m; i++) {
    merged.push(leftArr[i]);
  }
  for (; j < n; j++) {
    merged.push(rightArr[j]);
  }

  return merged;
}

import { mergeSort } from "./mergeSort.js";
import { Node } from "./node.js";

export class Tree {
  #root;

  constructor(arr) {
    const normalizedArr = this.#normalizeArr(arr);

    this.#root = this.#buildTree(normalizedArr, 0, normalizedArr.length - 1);
  }

  #normalizeArr(arr) {
    return mergeSort([...new Set(arr)]);
  }

  #buildTree(arr, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);

    root.left = this.#buildTree(arr, start, mid - 1);
    root.right = this.#buildTree(arr, mid + 1, end);

    return root;
  }

  get root() {
    return this.#root;
  }
}

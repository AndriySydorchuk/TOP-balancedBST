import { mergeSort } from "./mergeSort.js";
import { Node } from "./node.js";

export class Tree {
  #root;

  constructor(arr) {
    this.#checkInput(arr);

    const normalizedArr = this.#normalizeArr(arr);

    this.#root = this.#buildTree(normalizedArr, 0, normalizedArr.length - 1);
  }

  #checkInput(arr) {
    //allows to create an empty tree
    if (arr === undefined) return;

    if (!Array.isArray(arr))
      throw new TypeError("Invalid input: expected an array");

    if (arr.some((element) => !Number.isInteger(element)))
      throw new TypeError("Invalid input: all elements must be integers.");
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

  includes(value, root = this.#root) {
    if (root === null) return false;

    if (root.data === value) return true;

    let found = this.includes(value, root.left);
    if (found) return found;

    return this.includes(value, root.right);
  }
}

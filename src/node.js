export class Node {
  #data;
  #left;
  #right;

  constructor(data) {
    this.#data = data ? data : null;
    this.#left = null;
    this.#right = null;
  }
}

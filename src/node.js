export class Node {
  #data;
  #left;
  #right;

  constructor(data) {
    this.#data = data ? data : null;
    this.#left = null;
    this.#right = null;
  }

  get data() {
    return this.#data;
  }

  set data(newData) {
    this.#data = newData;
  }

  get left() {
    return this.#left;
  }

  set left(newLeft) {
    if (!(newLeft instanceof Node) && newLeft !== null)
      throw new TypeError("Invalid child node type");

    this.#left = newLeft;
  }

  get right() {
    return this.#right;
  }

  set right(newRight) {
    if (!(newRight instanceof Node) && newRight !== null)
      throw new TypeError("Invalid child node type");

    this.#right = newRight;
  }
}

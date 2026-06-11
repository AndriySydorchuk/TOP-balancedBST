import { Node } from "../src/node";

describe("Testing Node behaviour", () => {
  describe("get data", () => {
    test("returns the node's integer data", () => {
      const node = new Node(5);
      expect(node.data).toBe(5);
    });

    test("returns the node's string data", () => {
      const node = new Node("Hello");
      expect(node.data).toBe("Hello");
    });

    test("returns the node's array data", () => {
      const node = new Node([1, 2, 3]);
      expect(node.data).toEqual([1, 2, 3]);
    });

    test("returns the node's object data", () => {
      const node = new Node({ a: 1, b: 2 });
      expect(node.data).toEqual({ a: 1, b: 2 });
    });
  });

  describe("set data", () => {
    test("sets the node's integer data", () => {
      const node = new Node();
      node.data = 5;
      expect(node.data).toBe(5);
    });

    test("sets the node's string data", () => {
      const node = new Node();
      node.data = "Hello";
      expect(node.data).toBe("Hello");
    });

    test("sets the node's array data", () => {
      const node = new Node();
      node.data = [1, 2, 3];
      expect(node.data).toEqual([1, 2, 3]);
    });

    test("sets the node's object data", () => {
      const node = new Node();
      node.data = { a: 1, b: 2 };
      expect(node.data).toEqual({ a: 1, b: 2 });
    });

    test("resets the node's integer data", () => {
      const node = new Node(5);
      node.data = 6;
      expect(node.data).toBe(6);
    });

    test("resets the node's string data", () => {
      const node = new Node("Hello");
      node.data = "World";
      expect(node.data).toBe("World");
    });

    test("resets the node's array data", () => {
      const node = new Node([1, 2, 3]);
      node.data = [4, 5, 6];
      expect(node.data).toEqual([4, 5, 6]);
    });

    test("resets the node's object data", () => {
      const node = new Node({ a: 1, b: 2 });
      node.data = { c: 3, d: 4 };
      expect(node.data).toEqual({ c: 3, d: 4 });
    });

    test("resets the node's data with different type", () => {
      const node = new Node(5);
      node.data = "Five";
      expect(node.data).toBe("Five");
    });
  });
});

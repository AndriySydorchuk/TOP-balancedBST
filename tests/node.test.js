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

  describe("get left child", () => {
    test("returns null for empty node's left child", () => {
      const node = new Node(5);
      expect(node.left).toBe(null);
    });

    test("returns the node's left child", () => {
      const node = new Node(5);
      node.left = new Node(4);
      expect(node.left).toEqual(new Node(4));
    });

    test("returns node's left-left grandchild", () => {
      const node = new Node(5);
      node.left = new Node(4);
      node.left.left = new Node(3);
      expect(node.left.left).toEqual(new Node(3));
    });
  });

  describe("set left child", () => {
    test("sets the node's left child", () => {
      const node = new Node(5);
      node.left = new Node(4);

      expect(node.left).toEqual(new Node(4));
    });

    test("sets left child to empty node", () => {
      const node = new Node(5);
      node.left = new Node();

      expect(node.left).toEqual(new Node());
    });

    test("sets node's left-left grandchild", () => {
      const node = new Node(5);
      node.left = new Node(4);
      node.left.left = new Node(3);

      expect(node.left.left).toEqual(new Node(3));
    });

    test("throws Type Error for non-Node input", () => {
      const node = new Node(5);

      expect(() => (node.left = [1, 2])).toThrow(TypeError);
    });
  });

  describe("get right child", () => {
    test("returns null for empty node's right child", () => {
      const node = new Node(5);
      expect(node.right).toBe(null);
    });

    test("returns the node's right child", () => {
      const node = new Node(5);
      node.right = new Node(4);
      expect(node.right).toEqual(new Node(4));
    });

    test("returns node's right-right grandchild", () => {
      const node = new Node(5);
      node.right = new Node(4);
      node.right.right = new Node(3);
      expect(node.right.right).toEqual(new Node(3));
    });
  });

  describe("set right child", () => {
    test("sets the node's right child", () => {
      const node = new Node(5);
      node.right = new Node(4);

      expect(node.right).toEqual(new Node(4));
    });

    test("sets right child to empty node", () => {
      const node = new Node(5);
      node.right = new Node();

      expect(node.right).toEqual(new Node());
    });

    test("sets node's right-right grandchild", () => {
      const node = new Node(5);
      node.right = new Node(4);
      node.right.right = new Node(3);

      expect(node.right.right).toEqual(new Node(3));
    });

    test("throws Type Error for non-Node input", () => {
      const node = new Node(5);

      expect(() => (node.right = [1, 2])).toThrow(TypeError);
    });
  });
});

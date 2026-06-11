import { Tree } from "../src/tree";
import { Node } from "../src/node";

describe("Testing Tree behaviour", () => {
  describe("get root", () => {
    test("retuns null for empty tree", () => {
      expect(new Tree().root).toBeNull();
    });

    test("retuns root 2 for [[2], [1,3]] tree", () => {
      expect(new Tree([1, 2, 3]).root).toEqual(new Node(2));
    });
  });

  describe("tree building", () => {
    test("builds empty tree", () => {
      expect(new Tree().root).toBeNull();
    });

    test("builds tree for [1,2,3]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.root).toEqual(new Node(2));
      expect(tree.root.left).toEqual(new Node(1));
      expect(tree.root.left.left).toBeNull();
      expect(tree.root.left.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(3));
      expect(tree.root.right.left).toBeNull();
      expect(tree.root.right.right).toBeNull();
    });

    test("builds tree for [1, 2, 3, 4, 5, 6, 7]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.root).toEqual(new Node(4));
      expect(tree.root.left).toEqual(new Node(2));
      expect(tree.root.left.left).toEqual(new Node(1));
      expect(tree.root.left.right).toEqual(new Node(3));
      expect(tree.root.left.right.left).toBeNull();
      expect(tree.root.left.right.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(6));
      expect(tree.root.right.left).toEqual(new Node(5));
      expect(tree.root.right.right).toEqual(new Node(7));
      expect(tree.root.right.right.left).toBeNull();
      expect(tree.root.right.right.right).toBeNull();
    });

    test("builds tree for arr with duplicates", () => {
      const tree = new Tree([1, 2, 2, 3]);
      expect(tree.root).toEqual(new Node(2));
      expect(tree.root.left).toEqual(new Node(1));
      expect(tree.root.left.left).toBeNull();
      expect(tree.root.left.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(3));
      expect(tree.root.right.left).toBeNull();
      expect(tree.root.right.right).toBeNull();
    });

    test("builds tree for arr with duplicates (2)", () => {
      const tree = new Tree([1, 2, 2, 3, 4, 5, 6, 6, 6, 7]);

      expect(tree.root).toEqual(new Node(4));
      expect(tree.root.left).toEqual(new Node(2));
      expect(tree.root.left.left).toEqual(new Node(1));
      expect(tree.root.left.right).toEqual(new Node(3));
      expect(tree.root.left.right.left).toBeNull();
      expect(tree.root.left.right.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(6));
      expect(tree.root.right.left).toEqual(new Node(5));
      expect(tree.root.right.right).toEqual(new Node(7));
      expect(tree.root.right.right.left).toBeNull();
      expect(tree.root.right.right.right).toBeNull();
    });

    test("builds tree for unsorted arr", () => {
      const tree = new Tree([3, 1, 2]);
      expect(tree.root).toEqual(new Node(2));
      expect(tree.root.left).toEqual(new Node(1));
      expect(tree.root.left.left).toBeNull();
      expect(tree.root.left.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(3));
      expect(tree.root.right.left).toBeNull();
      expect(tree.root.right.right).toBeNull();
    });

    test("builds tree for unsorted arr (2)", () => {
      const tree = new Tree([5, 2, 7, 1, 6, 3, 4]);

      expect(tree.root).toEqual(new Node(4));
      expect(tree.root.left).toEqual(new Node(2));
      expect(tree.root.left.left).toEqual(new Node(1));
      expect(tree.root.left.right).toEqual(new Node(3));
      expect(tree.root.left.right.left).toBeNull();
      expect(tree.root.left.right.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(6));
      expect(tree.root.right.left).toEqual(new Node(5));
      expect(tree.root.right.right).toEqual(new Node(7));
      expect(tree.root.right.right.left).toBeNull();
      expect(tree.root.right.right.right).toBeNull();
    });

    test("builds tree for unsorted arr with duplicates", () => {
      const tree = new Tree([2, 2, 3, 3, 3, 1]);
      expect(tree.root).toEqual(new Node(2));
      expect(tree.root.left).toEqual(new Node(1));
      expect(tree.root.left.left).toBeNull();
      expect(tree.root.left.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(3));
      expect(tree.root.right.left).toBeNull();
      expect(tree.root.right.right).toBeNull();
    });

    test("builds tree for unsorted arr with duplicates (2)", () => {
      const tree = new Tree([5, 2, 7, 5, 1, 6, 2, 3, 4, 7]);

      expect(tree.root).toEqual(new Node(4));
      expect(tree.root.left).toEqual(new Node(2));
      expect(tree.root.left.left).toEqual(new Node(1));
      expect(tree.root.left.right).toEqual(new Node(3));
      expect(tree.root.left.right.left).toBeNull();
      expect(tree.root.left.right.right).toBeNull();
      expect(tree.root.right).toEqual(new Node(6));
      expect(tree.root.right.left).toEqual(new Node(5));
      expect(tree.root.right.right).toEqual(new Node(7));
      expect(tree.root.right.right.left).toBeNull();
      expect(tree.root.right.right.right).toBeNull();
    });

    test("throws an error for non-array input", () => {
      expect(() => new Tree(3)).toThrow(TypeError);
      expect(() => new Tree("some input")).toThrow(TypeError);
      expect(() => new Tree({ a: 3, b: 4 })).toThrow(TypeError);
      expect(() => new Tree(null)).toThrow(TypeError);
    });
  });

  describe("includes(value) method", () => {
    test("returns true for value 1 in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(1)).toBe(true);
    });

    test("returns true for value 2 in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(2)).toBe(true);
    });

    test("returns true for value 3 in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(3)).toBe(true);
    });

    test("returns true for value 1 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(1)).toBe(true);
    });

    test("returns true for value 2 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(2)).toBe(true);
    });

    test("returns true for value 3 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(3)).toBe(true);
    });

    test("returns true for value 4 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(4)).toBe(true);
    });

    test("returns true for value 5 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(5)).toBe(true);
    });

    test("returns true for value 6 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(6)).toBe(true);
    });

    test("returns true for value 7 in tree [[4], [[2], [1, 3]], [[6], [5, 7]]]", () => {
      const tree = new Tree([1, 2, 3, 4, 5, 6, 7]);
      expect(tree.includes(7)).toBe(true);
    });

    test("returns true for value 1 in anonymous tree [[2], [1,3]]", () => {
      expect(new Tree([1, 2, 3]).includes(1)).toBe(true);
    });

    test("returns true for value 2 in anonymous tree [[2], [1,3]]", () => {
      expect(new Tree([1, 2, 3]).includes(2)).toBe(true);
    });

    test("returns true for value 3 in anonymous tree [[2], [1,3]]", () => {
      expect(new Tree([1, 2, 3]).includes(3)).toBe(true);
    });

    test("returns false for value 4 in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(4)).toBe(false);
    });

    test("returns false for value 0 in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(0)).toBe(false);
    });

    test("returns false for value -5 in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(-5)).toBe(false);
    });

    test("returns false for value null in tree [[2], [1,3]]", () => {
      const tree = new Tree([1, 2, 3]);
      expect(tree.includes(-5)).toBe(false);
    });

    test("returns false for value 4 in anonymous tree [[2], [1,3]]", () => {
      expect(new Tree([1, 2, 3]).includes(4)).toBe(false);
    });

    test("returns false for value 0 in anonymous tree [[2], [1,3]]", () => {
      expect(new Tree([1, 2, 3]).includes(0)).toBe(false);
    });

    test("returns false for value -5 in anonymous tree [[2], [1,3]]", () => {
      expect(new Tree([1, 2, 3]).includes(-5)).toBe(false);
    });
  });

  describe("insert(value) method", () => {
    test("inserts 0 to tree [[3], [1,5]] resulting in [[3], [[[1], [0]],5]]", () => {
      const tree = new Tree([1, 3, 5]);
      tree.insert(0);

      expect(tree.includes(0)).toBe(true);
      expect(tree.root.left.left.data).toBe(0);
      expect(tree.root.left.left.left).toBeNull();
      expect(tree.root.left.left.right).toBeNull();
    });

    test("inserts 2 to tree [[3], [1,5]] resulting in [[3], [[[1], [N, 2]],5]]", () => {
      const tree = new Tree([1, 3, 5]);
      tree.insert(2);

      expect(tree.includes(2)).toBe(true);
      expect(tree.root.left.right.data).toBe(2);
      expect(tree.root.left.right.left).toBeNull();
      expect(tree.root.left.right.right).toBeNull();
    });

    test("inserts 4 to tree [[3], [1,5]] resulting in [[3], [1,[[5], [4]]]]", () => {
      const tree = new Tree([1, 3, 5]);
      tree.insert(4);

      expect(tree.includes(4)).toBe(true);
      expect(tree.root.right.left.data).toBe(4);
      expect(tree.root.right.left.left).toBeNull();
      expect(tree.root.right.left.right).toBeNull();
    });

    test("inserts 6 to tree [[3], [1,5]] resulting in [[3], [1,[[5], [N, 6]]]]", () => {
      const tree = new Tree([1, 3, 5]);
      tree.insert(6);

      expect(tree.includes(6)).toBe(true);
      expect(tree.root.right.right.data).toBe(6);
      expect(tree.root.right.right.left).toBeNull();
      expect(tree.root.right.right.right).toBeNull();
    });

    test("inserts 0 and 2 to tree [[3], [1,5]] resulting in [[3], [[[1],[0,2]],5]]", () => {
      const tree = new Tree([1, 3, 5]);
      tree.insert(0);
      tree.insert(2);

      expect(tree.includes(0)).toBe(true);
      expect(tree.root.left.left.data).toBe(0);
      expect(tree.root.left.left.left).toBeNull();
      expect(tree.root.left.left.right).toBeNull();

      expect(tree.includes(2)).toBe(true);
      expect(tree.root.left.right.data).toBe(2);
      expect(tree.root.left.right.left).toBeNull();
      expect(tree.root.left.left.right).toBeNull();
    });

    test("inserts 3 and 2 to tree [[5], [1,9]] resulting in [[5], [[[1], [N, [[3], [2]]]],9]]", () => {
      const tree = new Tree([1, 5, 9]);
      tree.insert(3);
      tree.insert(2);

      expect(tree.includes(3)).toBe(true);
      expect(tree.root.left.right.data).toBe(3);

      expect(tree.includes(2)).toBe(true);
      expect(tree.root.left.right.left.data).toBe(2);
    });

    test("do not inserts new value 2 to tree where it's value is already present [[5], [2,9]]", () => {
      const tree = new Tree([2, 5, 9]);
      tree.insert(2);

      expect(tree.includes(2)).toBe(true);
      expect(tree.root.left.left).toBeNull();
      expect(tree.root.left.right).toBeNull();
      expect(tree.root.right.left).toBeNull();
      expect(tree.root.right.right).toBeNull();
    });
  });
});

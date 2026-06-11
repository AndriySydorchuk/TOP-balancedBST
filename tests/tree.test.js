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
  });
});

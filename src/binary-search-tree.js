const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    let newNode = new Node(data)

    const searchTree = node => {
      if(!node) {
        return newNode
      }

      if (data < node.data) {
        if (!node.left) {
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
      return node
    }

    this._root = searchTree(this._root)
  }

  has(data) {
    let currentNode = this._root

    while (currentNode) {
      if (data === currentNode.data) {
        return true
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
  }

  find(data) {
    let currentNode = this._root;

    while(currentNode) {
      if (data === currentNode.data) {
        return currentNode
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return null
  }

  remove(data) {
    const removeItem = (node, data) => {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeItem(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeItem(node.right, minFromRight.data);
        return node
      }
    }

    this._root = removeItem(this._root, data)
  }

  min() {
    if (!this._root) {
      return undefined;
    }

    let currentNode = this._root

    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.data
  }

  max() {
    if (!this._root) {
      return undefined;
    }

    let currentNode = this._root

    while (currentNode.right) {
      currentNode = currentNode.right
    }

    return currentNode.data
  }
}

module.exports = {
  BinarySearchTree
};
const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }
  root() {
    return this.rootNode
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data)
    function addNode(noda, data) {
      if (!noda) {
        return new Node(data)
      }
      if (noda.data === data) {
        return noda
      }
      if (data < noda.data) {
        noda.left = addNode(noda.left, data)
      }
      if (data > noda.data) {
        noda.right = addNode(noda.right, data)
      }
      return noda
    }
  }

  has(data) {
    return search(this.rootNode, data)
    function search(noda, data) {
      if (!noda) {
        return false
      }
      if (noda.data === data) {
        return true
      }
      return data > noda.data ? search(noda.right, data) : search(noda.left, data)
    }
  }

  find(data) {
    return findItem(this.rootNode, data)
    function findItem(noda, data) {
      if (!noda) {
        return null
      }
      if (noda.data === data) {
        return noda
      }
      return data > noda.data ? findItem(noda.right, data) : findItem(noda.left, data)
    }
  }

  remove(data) {
    this.noda = removeNoda(this.rootNode, data)

    function removeNoda(noda, data) {
      if (!noda) return null

      if (data < noda.data) {
        noda.left = removeNoda(noda.left, data)
        return noda
      } else if (data > noda.data) {
        noda.right = removeNoda(noda.right, data)
        return noda
      } else if (!noda.left && !noda.right) {
        return null
      }

      if (!noda.left) {
        return noda.right
      }
      if (!noda.right) {
        return noda.left
      }

      let minFromRight = noda.right

      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }

      noda.data = minFromRight.data
      noda.right = removeNoda(noda.right, minFromRight.data)

      return noda
    }
  }

  min() {
    if (!this.rootNode) return

    let noda = this.rootNode

    while (noda.left) {
      noda = noda.left
    }
    return noda.data
  }

  max() {
    if (!this.rootNode) return
    let noda = this.rootNode

    while (noda.right) {
      noda = noda.right
    }
    return noda.data
  }
}

module.exports = {
  BinarySearchTree,
}
